import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    group
} from '@angular/animations';
import { UsersProvider } from '../../providers/users/users';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html',
    animations: [
        trigger('flyInOut', [
            state('false', style({
                opacity: 1,
                height: '256px'
            })),
            state('true', style({
                opacity: 0,
                height: '0px'
            })),
            transition('false => true', animate('1000ms ease-in')),
        ])
    ]
})
export class ContactPage {

    users: any;
    isLoading: boolean;

    constructor(public navCtrl: NavController, private userService: UsersProvider) {
      this.isLoading = false;
      this.userService.getUsers().subscribe(users => {
          console.log(users);
          this.isLoading = true;
          this.users = users['results'];
      });
    }

    eventLogin(user) {
        this.userService.setUserLogged(user);
    }
}
