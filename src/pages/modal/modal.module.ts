import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule } from 'ionic-angular';

import { ModalPage } from './modal';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ModalPage),
  ],
})
export class ModalPageModule {}
