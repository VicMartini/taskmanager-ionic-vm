import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationModalPage } from './information-modal';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    InformationModalPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationModalPage),
  ],
})
export class InformationModalPageModule {}
