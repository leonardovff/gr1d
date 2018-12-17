import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './custom-material.module';

import { ApiInterceptor } from './interceptors/api.interceptor';
import { FakeBackendInterceptor } from './interceptors/fake-backend.interceptor';

import { FeedbackErrorInputPipe } from './pipes/feedback-error-input.pipe';
import { MaskDirective } from './directives/mask.directive';
import { ShowNamePipe } from './pipes/show-name.pipe';

@NgModule({
  declarations: [
    FeedbackErrorInputPipe,
    MaskDirective,
    ShowNamePipe
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
    FeedbackErrorInputPipe,
    ShowNamePipe,
    MaskDirective
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }, {

      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
