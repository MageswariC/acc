import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderManagementComponent } from './order-management.component';
import { CreateResidentialEndUserConnectionComponent } from './residentrial-end-user/create-residential-end-user-connection/create-residential-end-user-connection.component';



const routes: Routes = [
  {path: '', component: OrderManagementComponent, children: [
  { path: 'swp/ordermanagement/residential-connection', 
  component: CreateResidentialEndUserConnectionComponent , 
  // canDeactivate:[CanDeactivateGuard],
  data: { breadcrumb: ['Order Management', 'Residential Connection', 'Create Order']}},

 

  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
