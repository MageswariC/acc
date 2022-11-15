import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from '../../service/component/form.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modal') private modalContent!: TemplateRef<ModalComponent>
  @Output() newConfirmationEvent = new EventEmitter<string>();
  @Input() modalBoxObj: any;
  private modalRef!: NgbModalRef;
  constructor(config: NgbModalConfig ,private toastrService: ToastrService, private modalService: NgbModal, private formService:FormService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
  ngOnInit(): void {
    
    
  }

 open(obj?:any): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      // this.modalRef.close();
     
      this.modalRef = this.modalService.open(this.modalContent, { size: obj.modalSize })
      this.modalRef.result.then((result) => {
      
        // if(result=="Save click") {
        this.newConfirmationEvent.emit(result);

        // }
      }, (reason) => {
        console.log(reason);
        this.newConfirmationEvent.emit(reason);
      });
    })
  }


}
