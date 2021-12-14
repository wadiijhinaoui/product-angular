import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutModule } from './layouts/client-layout/client-layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularFileUploaderModule } from "angular-file-uploader";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientLayoutModule,
    AdminLayoutModule,
    AuthLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AngularFileUploaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
