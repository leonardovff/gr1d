import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatIconModule
  ],
})
export class CustomMaterialModuleModule { }
