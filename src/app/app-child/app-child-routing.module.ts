import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormDataResolver } from './user-form/user-form-data.resolver';
import { DataService } from '../services/data.service';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: 'user/:type', component: UserFormComponent, resolve: {formData: UserFormDataResolver} },
  {path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppChildRoutingModule { }
