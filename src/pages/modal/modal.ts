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
    const uuidv4 = require('uuid/v4');
    console.log("ENTRA"+this.name+this.date)
    let id =  uuidv4()
    let json_data = {"id" : id,  "name": this.name, "date": this.date ,"time_beggining" : this.time_beggining,"time_end" : this.time_end,"client" : this.client,"description" : this.description};
    this.storage.set(`${id}`, json_data);
    console.log(json_data)
    this.closeModal()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  };

  closeModal(this) {
    this.viewCtrl.dismiss(this.name);
  };

}
