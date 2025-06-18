// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './module/components.module';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule
  ],
})
export class AppModule { }
