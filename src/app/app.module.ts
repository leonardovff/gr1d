import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModuleModule } from './modules/custom-material-module/custom-material-module.module';

import { ApiInterceptor } from './interceptors/api.interceptor';
import { fakeBackendProvider } from './interceptors/fake-backend.interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { FeedbackErrorInputPipe } from './pipes/feedback-error-input.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackErrorInputPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }, 
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
