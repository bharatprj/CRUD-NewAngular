export interface User {
   name?: string;
   age?: any;
   email?: string;
   password?: string;
   confirmPassword?: string;
   newPassword?: string;
   gender?: string;
   city?: string;
   mobileNo?: Number;
}
export interface UserForm {
   formType: string;
   formHeader: string;
   submitButtonLabel: string;
   extraButtonLabel: string;
}
