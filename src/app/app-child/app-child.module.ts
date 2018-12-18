import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared.module';
import { AppChildRoutingModule } from './app-child-routing.module';
import { AppChildComponent } from './app-child.component';

@NgModule({
  declarations: [AppChildComponent, HeaderComponent, FooterComponent],
  imports: [
    AppChildRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class AppChildModule { }
