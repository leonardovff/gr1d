import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
  MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
  MatListModule, MatSidenavModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
    MatListModule, MatSidenavModule, MatDialogModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
    MatListModule, MatSidenavModule, MatDialogModule
  ],
})
export class CustomMaterialModule { }
