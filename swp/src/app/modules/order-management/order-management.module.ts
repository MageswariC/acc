import { NgModule } from '@angular/core';
import { OrderManagementRoutingModule } from '../order-management/order-management-routing.module';
import { OrderManagementComponent } from './order-management.component';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CreateResidentialEndUserConnectionComponent } from './residentrial-end-user/create-residential-end-user-connection/create-residential-end-user-connection.component';

@NgModule({
  declarations: [
    OrderManagementComponent,
    CreateResidentialEndUserConnectionComponent,

  ],
  imports: [
    SharedModule,
    OrderManagementRoutingModule,
    // StoreModule.forFeature('posts', postReducer)
  ]
})
export class OrderManagementModule { }
