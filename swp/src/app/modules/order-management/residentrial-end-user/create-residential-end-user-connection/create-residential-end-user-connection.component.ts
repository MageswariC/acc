import { Component, OnInit } from '@angular/core';
import { residentialConnectionModal } from '../../../../shared/modal/order-management/create-order/residential-end-user-connection.modal';
import { ToastrService } from 'ngx-toastr';
import { FormService } from '../../../../shared/service/component/form.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import residentialEndUserConnectionForm from '../../../../shared/formData/order-management/create-order/residential-end-user-connection-formData';
import fc from '../../../../shared/formData/feasibility-check/fesibility-check';
import { Router } from '@angular/router';
import { IDeactivateComponent } from 'src/app/services/decactivateGuard';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-create-residential-end-user-connection',
  templateUrl: './create-residential-end-user-connection.component.html',
  styleUrls: ['./create-residential-end-user-connection.component.scss']
})
export class CreateResidentialEndUserConnectionComponent implements OnInit, IDeactivateComponent {
  resiEndUserS1!: FormGroup;
  isFesibilityCheckClicked: Boolean = false;

  //Feasibility check input 
  fcInput: any;

  //form builder input
  formData: any;
  getFormControl: any;
  shedule1Model = residentialConnectionModal;

  orderFormValue: any = null;
  constructor(private store:Store<AppState>, private fb: FormBuilder, private router: Router, private formService: FormService, private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.formData = residentialEndUserConnectionForm;
    this.fcInput = fc;
    this.resiEndUserS1 = this.fb.group({})

  }
  getForm(form: FormGroup) {
    this.getFormControl = form.controls;
  }
  fcFormValue(fcForm: FormGroup) {
    console.log("fcFormValue", fcForm)
    const post = fcForm.value
    
    this.isFesibilityCheckClicked = true;
  }
  getFormVal(val: any) {
    this.orderFormValue = val;
    //console.log("---in get value--",val.value)
    this.router.navigate(['swp/home']);
    this.toastrService.success('The request for the connection has been submitted successfully ORI Details: 02-01-07012022-45671-A', '');
  }
  changeTechnology(obj: any) {
    obj.fgroup.options.children.forEach((control: any) => {
      if (control.key == 'splitRatio') {
        control.option.forEach((opt: any) => {
          if (obj.option.value == 'GPON' && opt.value == '2:24') {
            opt.disable = true;
            this.getFormControl.orderDetails.patchValue({ 'splitRatio': '1:24' });
          } else {
            opt.disable = false;
          }
          if (obj.option.value == 'OE') {
            if (opt.value == '1:1' || opt.value == '1:24') {
              opt.disable = true;
              this.getFormControl.orderDetails.patchValue({ 'splitRatio': '2:24' });
            }
          }
        })
      }
    })
  }

  changeRedundancyService(obj: any) {
    obj.fgroup.options.children.forEach((control: any) => {
      if (control.key == 'rejectIfredundancyService') {
        control.option.forEach((opt: any) => {
          if (obj.option.value == 'No') {
            control.required = false;
            opt.disable = true;
            this.getFormControl.orderDetails.get('rejectIfredundancyService').clearValidators();
            this.getFormControl.orderDetails.get('rejectIfredundancyService').setValue(null);
          } else {
            control.required = true;
            this.getFormControl.orderDetails.get('rejectIfredundancyService').setValidators([Validators.required]);
            this.getFormControl.orderDetails.patchValue({ 'rejectIfredundancyService': 'No' });
            opt.disable = false;
          }
          this.getFormControl.orderDetails.get('rejectIfredundancyService').updateValueAndValidity();
        })
      }
    })
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.orderFormValue) {
      return confirm("Do you want to discard the changes?")
    } else {
      return true;
    }
  }
}


