
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContainerComponent } from './shared/common/container/container.component';
import { HomeComponent } from './shared/common/home/home.component';
import { LoginComponent } from './shared/common/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { BnNgIdleService } from 'bn-ng-idle';
// import { reducers } from './shared/store';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/components/shared.module';
import { TokenInterceptorService } from './services/token.interceptor.service';

import { appReducer } from './store/app.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { CustomSerializer } from './store/router/custom-serializer';
import { OrderManagementModule } from './modules/order-management/order-management.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomeComponent,
    LoginComponent,
  
  ],
  imports: [
   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    OrderManagementModule,

    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),
    
    EffectsModule.forRoot([AuthEffects]),
      // Set up ngrx store.
      StoreModule.forRoot(appReducer),
      // Set up ngrx router store.`
      StoreRouterConnectingModule.forRoot(
        {
          serializer: CustomSerializer
        }
      ),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      })
  ],
  providers: [
    BnNgIdleService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
