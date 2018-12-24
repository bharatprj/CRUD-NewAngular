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
   // MatDialogModule,
   MatIconModule,
   MatMenuModule,
   MatButtonModule,
   MatTooltipModule,
   MatCheckboxModule,
   MatFormFieldModule,
   MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
   MatPaginatorModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatProgressBarModule,
   MatAutocompleteModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';

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
      MatSidenavModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressBarModule,
      MatAutocompleteModule,
   ],
   exports: [
      MatAutocompleteModule,
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
      MatSidenavModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressBarModule
   ]

})

export class MaterialModule {
}
