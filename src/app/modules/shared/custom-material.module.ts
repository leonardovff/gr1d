import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
  MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule
  ],
})
export class CustomMaterialModule { }
