import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
  MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
  MatListModule, MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
    MatListModule, MatSidenavModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule, MatSnackBarModule, MatProgressBarModule, MatToolbarModule,
    MatListModule, MatSidenavModule
  ],
})
export class CustomMaterialModule { }
