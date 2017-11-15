import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
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

  id : string ;
  description : any;

  constructor( private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public storage: Storage) {
    this.id = this.navParams.get('id');
    this.description = "";
    this.storage.get(this.id).then((value) => {
      console.log(value.description,"description")
      this.description = value.description;
  });


  };

  ionViewDidLoad(this) {


    console.log('ionViewDidLoad ModalPage');



  };

  deleteThisItem(this){
    let confirm = this.alertCtrl.create({
         title: '',
         message: '¿Está seguro de que quiere eliminar esta tarea?',
         buttons: [
           {
             text: 'Si',
             handler: () => {
               console.log('Si clicked');
               this.storage.remove(this.id);
               this.viewCtrl.dismiss(this.name);

             }
           },
           {
             text: 'No',
             handler: () => {
             }
           }
         ]
       });
       confirm.present();
     };


  closeModal(this) {
    this.viewCtrl.dismiss(this.name);
  };

}
