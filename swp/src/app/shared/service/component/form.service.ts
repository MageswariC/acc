import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
//import MyService from './myservice';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  storeHomeData:any;
  colcoMasterResponse = [
    {
    id:'1',
    sname: "Name_1",
    nric_number: "123455",
    company_name: "Accenture",
    company_phone_number: '9823456789',
    company_fax_number: '9999999999'
  },
  {
    id:'2',
    sname: "Name_2",
    nric_number: "123455",
    company_name: "Accenture",
    company_phone_number: '9912345678',
    company_fax_number: '1111111111'
  },
]
  data:any;
  
  manageOrderBtnList = [
    {
      label: 'Modify',
      name: 'modify',
    },
    {
      label: 'Cancel',
      name: 'cancel'
    },
    {
      label: 'Terminate Order',
      name: 'terminateOrder'
    },
    {
      label: 'Manage TP',
      name: 'manageTP'
    },
    {
      label: 'GPON to OE',
      name: 'GPONtoOE'
    },
    {
      label: 'Relocate service',
      name: 'relocateService'
    },
  ]
  // getColoMasterList(){
  //   return this.colcoMasterResponse;
  // }
  manageOrderData ={};
  orderSatusData = {};
  viewTroubleTicket ={} ;
  formValue = new Subject();
  // emitFormValueformModalForm = new Subject();
  backBtnClicked = new Subject();
  //colo rack detail dimention change based on room type
    coloRackDetail = '';

    changeAmps = new Subject();
    emitFormModalControls = new Subject();
    s12 = {
      width:2000,
      depth:2000
    }
    //12A
  
    coloDetailsChangeStatus = new Subject();
    interConnectRack = new Subject();

 //12b
 coloDetailsChangeStatus12B = new Subject();
  StoreTableData :any= [];
//   getStoreTableData(): Observable<any> {
//     return this.StoreTableData;
// }
SharingData = new Subject();  
}
