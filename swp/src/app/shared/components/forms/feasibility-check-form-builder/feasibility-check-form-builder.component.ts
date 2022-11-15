import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import {FormData} from '../../../interface/components/form-builder';
import { ModalComponent } from '../../../Library/modal/modal.component';
const states = ['#01-01', 
'#01-02',
'#01-03',
'#01-04',
'#01-05',
'#01-06',
'#01-07',
'#01-08'
];
@Component({
  selector: 'feasibility-check-form-builder',
  templateUrl: './feasibility-check-form-builder.component.html',
  styleUrls: ['./feasibility-check-form-builder.component.scss']
})
export class FeasibilityCheckFormBuilderComponent implements OnInit {
  @Input() feasibilityCheck!: FormData;
  @Input() parent: any
  @Output() emitFCFromControl = new EventEmitter();
  @Output() emitFcform = new EventEmitter();
  public fcForm: FormGroup = this.fb.group({});
  modalObj!:any;
  @ViewChild('modal')
  private modalComponent!: ModalComponent;
  
  async openModal() {
    return await this.modalComponent.open();
  }

  openModalForCancel() {
    this.modalObj ={
      modalType:'confirmation',
      modalTitle : "Confirmation",
      modalFormData : "Are you sure you want to Cancel ?",
      modalFormValue:''
    }
    this.openModal();
  }
  constructor(private fb: FormBuilder, ) { }

  ngOnInit(): void {
    this.createForm(this.feasibilityCheck.controls);
  }
  createForm(controls: FormData['controls']){
    for (const control of controls){
      const newGroup = new FormGroup({});
      control?.options.children.map((child:any) => {
        const newControl = new FormControl();
        const validatorsToAdd = child?.validators(Validators);
          newControl.setValidators(validatorsToAdd);
          newGroup.addControl(child.key, newControl);
          this.fcForm.addControl(child.key, newControl);
      })
    }
    this.emitFCFromControl.emit(this.fcForm);
  }
  onSubmit(){
    this.emitFcform.emit(this.fcForm);
    console.log("--in clcik--")
  }
  checkErrors(f: FormGroup, fg: any, fc: any){
    if (f.controls && f.controls[fc]?.touched) {
      if(f.controls[fc].errors){
        const error = Object.keys(f.controls[fc].errors || {})[0];
        return error;
      }
    } 
    return null;
  }

  ConfirmationEvent(data: any) {

  }
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 3 ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

}
