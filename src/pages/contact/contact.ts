import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { HomePage } from "../home/home";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html',
})
export class ContactPage {

    users: any;
    isLoading: boolean;
    loading: any;
    homePage: any;

    constructor(public navCtrl: NavController, private userService: UsersProvider, public loadingCtrl: LoadingController) {

        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        this.loading.present();

        this.isLoading = false;
        this.userService.getUsers().subscribe(users => {
            console.log(users);
            this.isLoading = true;
            this.users = users['results'];
            this.loading.dismiss();
        });

        this.homePage = HomePage;
    }

    eventLogin(user) {
        this.userService.setUserLogged(user);
        this.navCtrl.setRoot(HomePage);
    }
}
