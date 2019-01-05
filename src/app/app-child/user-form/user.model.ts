export interface User {
   _id?: string;
   name?: string;
   dob?: any;
   email?: string;
   password?: string;
   confirmPassword?: string;
   newPassword?: string;
   gender?: string;
   city?: string;
   mobileNo?: Number;
   image?: File;
}
export interface UserForm {
   formType: string;
   formHeader: string;
   submitButtonLabel: string;
   extraButtonLabel: string;
}
