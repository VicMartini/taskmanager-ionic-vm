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

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public storage: Storage) {
    this.id_task = this.navParams.get('id');
    Promise.all([
    this.storage.get(this.id_task)
]).then(data => {
  this.description = data;
  console.log(this.description,data)
});
console.log(this.description,"Here")



  };


  ionViewDidLoad(this) {


    console.log('ionViewDidLoad ModalPage');



  };

  closeModal(this) {
    this.viewCtrl.dismiss(this.name);
  };

}
