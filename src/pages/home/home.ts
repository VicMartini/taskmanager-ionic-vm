import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { InformationModalPage } from '../information-modal/information-modal';
import { Storage } from '@ionic/storage';@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

    
 tasklist : any;
 list : any;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public storage: Storage ) {
      this.tasklist = []
      this.list = []
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

  openModal(this) {
    let myModal = this.modalCtrl.create(InformationModalPage);
  myModal.onDidDismiss(data => {
      console.log(data)
  });
      myModal.present();
  };
  
  
  test(){
    this.storage.forEach( (value, key, index) => {
    if (!(this.tasklist.indexOf(key) >= 0)){
      this.tasklist.push(key,value)
      this.list.push(value)
      console.log(index)
    }     
});

    console.log(this.tasklist)
  };

}
