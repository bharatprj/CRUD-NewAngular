import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import { UserForm } from './user.model';

@Injectable()
export class UserFormDataResolver implements Resolve<any> {
   formData: UserForm;
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot) {
   const data = setUserFormData(route.paramMap.get('type'));
     if (data) {
        return data;
     } else {
        this.router.navigate(['/pagenotfound']);
     }
  }
}

function setUserFormData(type) {
   switch (type) {
      case 'signin': return {
         formType: 'signin',
         formHeader: 'Sign In',
         submitButtonLabel: 'Submit',
         extraButtonLabel: 'Sign Up'
      };
      case 'signup': return {
         formType: 'signup',
         formHeader: 'Sign Up',
         submitButtonLabel: 'Submit',
         extraButtonLabel: 'Sign In'
      };
      case 'forgetpassword': return {
         formType: 'forgetpassword',
         formHeader: 'Forgot Password',
         submitButtonLabel: 'Send Mail'
      };
      case 'resetpassword': return {
         formType: 'resetpassword',
         formHeader: 'Reset Password',
         submitButtonLabel: 'Submit',
         extraButtonLabel: 'Sign In'
      };
      case 'edit': return {
         formType: 'edit',
         formHeader: 'Edit Profile',
         submitButtonLabel: 'Update',
         extraButtonLabel: 'Discard'
      };
   }
}
