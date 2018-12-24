import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { AppChildModule } from './app-child/app-child.module';
import { UserFormDataResolver } from './app-child/user-form/user-form-data.resolver';
import { DataService } from './services/data.service';
import { CommonService } from './services/common.service';
import { ToastMessageService } from './services/toast-message.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token.interceptor';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppChildModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: [UserFormDataResolver, DataService, CommonService, ToastMessageService, AuthGuard,
     TokenInterceptorService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
