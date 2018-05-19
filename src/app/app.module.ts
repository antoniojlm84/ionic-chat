import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';
import { HttpClientModule } from '@angular/common/http';
import { MessagesProvider } from '../providers/messages/messages';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";
import { BoardComponent } from "../components/board/board";
import {TextComponent} from "../components/text/text";
import {ReactiveFormsModule} from "@angular/forms";

const firebase = {
    apiKey: "AIzaSyCqDO86i1EZQPpN-zwW906xDajCN9d31VY",
    authDomain: "angular2-curso-ae117.firebaseapp.com",
    databaseURL: "https://angular2-curso-ae117.firebaseio.com",
    projectId: "angular2-curso-ae117",
    storageBucket: "angular2-curso-ae117.appspot.com",
    messagingSenderId: "704159780117"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    BoardComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    MessagesProvider
  ]
})
export class AppModule {}
