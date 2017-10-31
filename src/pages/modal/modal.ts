import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public storage: Storage) {

  };

  saveData(this){
    console.log("ENTRA"+this.name+this.date)
    let json_data = { "name": this.name, "date": this.date };
    this.storage.set(`task ${ this.date }`, json_data);
    this.closeModal()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  };

  closeModal() {
    this.viewCtrl.dismiss(this.name);
  };

}
