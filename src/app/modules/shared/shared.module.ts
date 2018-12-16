import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './custom-material.module';

import { FeedbackErrorInputPipe } from './pipes/feedback-error-input.pipe';

@NgModule({
  declarations: [
    FeedbackErrorInputPipe
  ],
  imports: [
    CommonModule, 
    CustomMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CustomMaterialModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    FeedbackErrorInputPipe
  ]
})
export class SharedModule { }
