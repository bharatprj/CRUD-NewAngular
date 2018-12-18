import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {path: '', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})
export class PageNotFoundModule { }
