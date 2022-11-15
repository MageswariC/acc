import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { rlInfo } from '../../modal/order-management/create-order/rl-info.modal';

@Component({
  selector: 'requesting-license',
  templateUrl: './requesting-license.component.html',
  styleUrls: ['./requesting-license.component.scss']
})
export class RequestingLicenseComponent implements OnInit {
  rlForm!: FormGroup;
  rlData: any
  isFromDisabled: Boolean = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rlData = rlInfo;
    this.rlForm = this.fb.group({
      name: [],
      companyName: [],
      designation: [],
      companyPhoneNumber: [],
      companyFaxNumber: [],
      companyEmail: []

    })
    this.rlForm.patchValue(this.rlData.requestingLicensee);
  }
}
