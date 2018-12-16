import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
  MatIconModule, MatSnackBarModule, MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule
  ],
})
export class CustomMaterialModule { }
