import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { Storage } from '@ionic/storage';@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

    
 
tasklist:Array;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public storage: Storage ) {
      this.tasklist = []
      this.test()
  };

  openModal() {
    let myModal = this.modalCtrl.create(ModalPage);
  myModal.onDidDismiss(data => {
      console.log(data)
      this.test()
  });
      myModal.present();
  };
  test(){
    this.storage.forEach( (value, key, index) => {
        console.log(value)
    if (!(value in this.tasklist)){ this.tasklist.push(value)}     
    console.log(this.tasklist)
});
  };

}
