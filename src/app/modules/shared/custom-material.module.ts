import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
  MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
    MatListModule
  ],
})
export class CustomMaterialModule { }
