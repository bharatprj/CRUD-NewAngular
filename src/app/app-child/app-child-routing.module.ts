import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppChildComponent } from './app-child.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppChildRoutingModule { }
