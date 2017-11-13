import {OnInit, Component} from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { AlertController } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  taskForm: FormGroup;
  taskInfo: {date : string, time_beggining : string, time_end : string, name : string, client : string ,description : string} = {date : '', time_beggining : '', time_end : '', name : '', client : '' ,description : ''};

  task : any;

  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public storage: Storage,public formBuilder: FormBuilder,private alertCtrl: AlertController) {


  };

  ngOnInit(): any {
    this.taskForm = this.formBuilder.group({
      'date': ['', [Validators.required]],
      'time_beggining': ['', [Validators.required]],
      'time_end': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'client': ['', [Validators.required]],
      'description': ['', [Validators.required]],

    });
  };



setNotPristine(param){

    this.http.get('http://127.0.0.1:8000/users/').subscribe(data => {
      this.results = data['results'];
      console.log(this.results);
    });


this.taskForm.controls[param].markAsDirty();
this.taskForm.controls[param].markAsTouched();

}
  saveData(this){
    if (this.taskForm.valid == true){
    const uuidv4 = require('uuid/v4');
    let id =  uuidv4()
    this.storage.set(`${id}`, this.taskInfo);
    this.closeModal()
}else{
  for (let i in this.taskInfo){
    this.setNotPristine(i)
  }
  let alert = this.alertCtrl.create({
    message: 'Por favor, llene los campos marcados en rojo',
    buttons: ['OK']

  });
  alert.present();

    }

  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  };

  closeModal(this) {
    this.viewCtrl.dismiss(this.name);
  };

}
