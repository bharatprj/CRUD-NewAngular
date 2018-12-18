/**
 * Created by bprajapati on 10/15/2018.
 */
import { NgModule } from '@angular/core';
import {
   MatCardModule,
   MatListModule,
   MatDividerModule,
   MatInputModule,
   MatRadioModule,
   MatSelectModule,
   MatDialogModule,
   MatIconModule,
   MatMenuModule,
   MatButtonModule,
   MatTooltipModule,
   MatCheckboxModule,
   MatFormFieldModule,
   MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
   MatPaginatorModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
   declarations: [],
   imports: [
      MatListModule,
      MatPaginatorModule,
      MatCardModule,
      MatDividerModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatDialogModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      MatTooltipModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule
   ],
   exports: [
      MatListModule,
      MatPaginatorModule,
      MatCardModule,
      MatDividerModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatDialogModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      MatTooltipModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule
   ]

})

export class MaterialModule {
}
