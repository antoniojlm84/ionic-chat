import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/observable/of';
import { AngularFirestore } from "angularfire2/firestore";
import { UsersProvider } from "../../providers/users/users";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

    messages: any;
    fbCollection: any;
    loggedUser: string;

    constructor(public navCtrl: NavController, private fb: AngularFirestore, private UsersProvider: UsersProvider) {
        this.loggedUser = UsersProvider.getUserLogged();
    }

    ngOnInit() {
        this.fbCollection = this.fb.collection('messages');
        this.messages = this.fbCollection.valueChanges();
    }

    add(event) {
        this.fbCollection.add({
           message: event,
           timestamp: new Date().getTime(),
           username: (this.loggedUser['name']['first'] + ' ' + this.loggedUser['name']['last'])
        });
    }
}
