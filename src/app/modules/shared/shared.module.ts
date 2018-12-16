import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './custom-material.module';

import { ApiInterceptor } from './interceptors/api.interceptor';
import { fakeBackendProvider } from './interceptors/fake-backend.interceptor';

import { FeedbackErrorInputPipe } from './pipes/feedback-error-input.pipe';
import { MaskDirective } from './directives/mask.directive';

@NgModule({
  declarations: [
    FeedbackErrorInputPipe,
    MaskDirective
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }, 
    fakeBackendProvider
  ]
})
export class SharedModule { }
