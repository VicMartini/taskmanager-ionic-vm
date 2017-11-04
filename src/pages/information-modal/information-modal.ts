import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the InformationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information-modal',
  templateUrl: 'information-modal.html',
})


export class InformationModalPage {

  description : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public storage: Storage) {

    this.description = "A";
    this.storage.get( this.navParams.get('id')).then((value) => {
      this.description = value.description;
  });


  };

  ionViewDidLoad(this) {


    console.log('ionViewDidLoad ModalPage');



  };

  closeModal(this) {
    this.viewCtrl.dismiss(this.name);
  };

}
