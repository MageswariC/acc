import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FeasibilityCheckFormBuilderComponent } from './forms/feasibility-check-form-builder/feasibility-check-form-builder.component';
import { FormBuilderComponent } from './forms/form-builder/form-builder.component';
import { ModalComponent } from '../Library/modal/modal.component';
import { RequestingLicenseComponent } from '../common/requesting-license/requesting-license.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SessionTimeoutComponent } from './session-timeout/session-timeout.component';

@NgModule({
    declarations: [
        FormBuilderComponent,
        FeasibilityCheckFormBuilderComponent,
        ModalComponent,
        BreadcrumbComponent,
        RequestingLicenseComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        DynamicTableComponent,
        LoadingSpinnerComponent,
        SessionTimeoutComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        FormBuilderComponent,
        FeasibilityCheckFormBuilderComponent,
        ModalComponent,
        BreadcrumbComponent,
        RequestingLicenseComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        DynamicTableComponent,
        LoadingSpinnerComponent,
        SessionTimeoutComponent,

    ]
})
export class SharedModule { }