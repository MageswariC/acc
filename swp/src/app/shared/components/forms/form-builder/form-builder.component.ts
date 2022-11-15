import {
  Component,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, AbstractControl, FormGroupDirective, Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormData } from '../../../interface/components/form-builder';
import { FormService } from '../../../service/component/form.service';
import { NgbCalendar, NgbDateAdapter, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../Library/modal/modal.component';
import { Observable, OperatorFunction } from 'rxjs';

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
  selector: 'form-builder',
  changeDetection: ChangeDetectionStrategy?.OnPush,
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],

})
export class FormBuilderComponent implements OnInit {
  
  isSubmitted: boolean = false;
  @Input() formData!: FormData;
  @Input() sheduleModal: any
  @Input() parent: any
  @Input() incidentType :any;
  @Output() emitForm = new EventEmitter();
  @Output() emitFormValue = new EventEmitter();
  @Output() emitAddRacks = new EventEmitter();
  @Output() emitData = new EventEmitter();
  @Input() tableColoumFormat :any;
  @Input()tableRowData:any;
  @Input() tableModalData:any;
  modalObj!:any;
  datepickerConfig!:Partial<BsDatepickerConfig>
  selectectedDate!: any;
  minDate!: Date;
  maxDate!: Date;
  bsValue = new Date();
  disabledDates = [
    new Date(),
    new Date('07-20-2022'),
  ];

  public myForm: FormGroup = this.fb.group({});
  constructor(private dateAdapter: NgbDateAdapter<string>, private ngbCalendar: NgbCalendar, private fb: FormBuilder, private route: Router, private formService: FormService, private rootFormGroup: FormGroupDirective, private calendar: NgbCalendar) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() );
    this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.datepickerConfig=Object.assign({}, 
        {containerClass:'theme-dark-blue', showWeekNumbers:false},
        {dateInputFormat:'MM/DD/YYYY'}
        )
   }  
   isDisabled!: any;


  // openModalForCancel() {
  // console.log('inside openModalForCancel');
  //   this.modalBoxObj.templateName = 'confirmaton';
  //   this.modalBoxObj.modalTitle = "Confirmation";
  //   this.modalBoxObj.modalBody = "Are you sure you want to Cancel ?";  
  //   this.openModal();
  // }
  openModalForCancel() {
    this.modalObj ={
      modalType:'confirmation',
      modalTitle : "Confirmation",
      modalFormData : "Are you sure you want to Cancel ?",
      modalFormValue:''
    }
    // this.openModal({modalSize:'md'});
  }
  openModalForAddData(data:any){
    console.log("data", data);
    this.modalObj = {
      modalType:'form',
      modalTitle : "Add Data",
      modalFormData:this.tableModalData,
      modalFormValue:''
    }
    // this.openModal();

  }
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 3 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  ngOnInit(): void {
    // console.log(this.tablesList)
    this.isDisabled = (date: NgbDate, current: { month: number }) => {
      if (this.isWeekend(date)) return true;
      if (this.pastdays(new Date(date.year, date.month - 1, date.day + 1),)) return true;
      return false;
    }
    if (this.formData && this.formData.controls) {
      this.formData.controls.forEach((ele) => {
        ele.options.children.forEach((e: any) => {
          if (!e.f) e.handler = () => { };
        })
      })
      this.createForm(this.formData.controls);
    }
    if(this.sheduleModal)this.myForm.patchValue(this.sheduleModal);
  }
  ngOnChanges(changes: SimpleChanges) {
  }

  addData() {
    this.emitData.emit();
  }


  createForm(controls: FormData["controls"]) {
    for (const control of controls) {
      if (control.type == 'group') {
        const newGroup = new FormGroup({});
        control.options?.children.map((child: any) => {
          if (child.subformControls) {
            const newArry = new FormArray<any>([]);
            const subGroup = new FormGroup<any>({});
            child.subformControls.map((child: any) => {
              const subnewcontrol = new FormControl();
              const validatorsToAdd = child?.validators(Validators);
              subnewcontrol.setValidators(validatorsToAdd);
              subGroup.addControl(child.key, subnewcontrol)
            });
            newArry.push(subGroup);
            newGroup.addControl(child.key, newArry);
          } else {
            const newControl = new FormControl();
            const validatorsToAdd = child?.validators(Validators);
            newControl.setValidators(validatorsToAdd);
            newGroup.addControl(child.key, newControl);
          }
        })
        this.myForm.addControl(control.key, newGroup);
        console.log("this.myForm", this.myForm)
        this.emitForm.emit(this.myForm);
      }

    }
    // console.log("..ddd...",this.myForm.controls["connectionDetails"] as FormGroup)
    // let a = this.myForm.controls["connectionDetails"] as FormGroup;
    // let b = a.get("tieCableFiberCores") as FormArray;
    // console.log("b", b);

  }
  getFormArray(key: any, fc: any) {
    //console.log(".....", key)
    let a = this.myForm.controls[fc] as FormGroup;
    let b = a.get(key) as FormArray;
    return a.get(key) as FormArray;
  }
  checkErrors(f: FormGroup, fg: any, fc: any,) {
    const a = f.controls[fg] as FormGroup;
    if (a.controls && a.controls[fc]?.touched) {
      if (a.controls[fc].errors) {
        const error = Object.keys(a.controls[fc].errors || {})[0];
        return error;
      }
    }
    return null;
  }
  checksubcontrolErrors(f: FormGroup, fg: any, fc: any, index: any) {
    const a = f.controls[fg] as FormGroup;
    const b = a.controls[fc] as FormArray;
    const c = b.controls[0] as FormGroup;
    const d = c.get(index);
    if (a.controls && d?.touched) {
      if (c.controls[index].errors) {
        const error = Object.keys(c.controls[index].errors || {})[0];
        return error;
      }
    }
    return null;
  }
  onSubmit() {
    if (!this.isSubmitted) {
      this.formService.formValue.next(this.myForm.value);
      this.emitFormValue.emit(this.myForm);
    }

  }

  addRacks() {
    this.emitAddRacks.emit()
  }

  pastdays(curDate: Date) {
    let today = new Date();
    if (curDate.getTime() < today.getTime()) return true;
    return false
  }
  onDateSelection(date: NgbDate) {
    this.selectectedDate = date;
  }

}

function debounceTime(arg0: number): any {
  throw new Error('Function not implemented.');
}


function distinctUntilChanged(): any {
  throw new Error('Function not implemented.');
}


function map(arg0: (term: any) => any): any {
  throw new Error('Function not implemented.');
}
