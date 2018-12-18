import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [ ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule
    ]
})
export class SharedModule { }
