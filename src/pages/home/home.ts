import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {MessagesService} from '../providers/messages.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    messages: any;

    constructor(public navCtrl: NavController) { //private messageService: MessagesService) {
        //this.messages = this.messageService.getMessages();
    }

}
