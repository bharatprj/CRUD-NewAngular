import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormDataResolver } from './user-form/user-form-data.resolver';
import { DataService } from '../services/data.service';
import { AuthGuard } from '../auth.guard';
import { AppChildComponent } from './app-child.component';

const routes: Routes = [
  {
    // path: '', redirectTo: 'account/signin', pathMatch: 'full',
    path: '', component: AppChildComponent,
    children:
      [
        { path: 'account/:type', component: UserFormComponent, resolve: { formData: UserFormDataResolver }},
        {
          path: 'profile/:id', component: UserProfileComponent
          // , canActivate: [AuthGuard]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppChildRoutingModule { }
