import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppChildComponent } from './app-child/app-child.component';

const routes: Routes = [
  {path: '', component: AppChildComponent},
  {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
