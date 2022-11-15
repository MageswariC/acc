import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './shared/common/container/container.component';
import { HomeComponent } from './shared/common/home/home.component';
import { LoginComponent } from './shared/common/login/login.component';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  { path: '',   component: LoginComponent,},
  { path: 'auth/login',   component: LoginComponent,},
  {
    path: '', component: ContainerComponent, children: [
      { path: 'swp/home',  canActivate: [AuthGuard],component: HomeComponent, },
      //order-management
      {
        path: "",
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/order-management/order-management.module').then(m => m.OrderManagementModule)
      },
      //billing
     
      //support
     
      //trouble-ticket
      //advance coverage check
      //user management
    ]
  },
  // { path: '**', redirectTo: 'auth/login', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
