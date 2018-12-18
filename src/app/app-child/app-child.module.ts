import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared.module';
import { AppChildRoutingModule } from './app-child-routing.module';
import { AppChildComponent } from './app-child.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppChildComponent, HeaderComponent, FooterComponent, UserFormComponent, UserProfileComponent],
  imports: [
    AppChildRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class AppChildModule { }
