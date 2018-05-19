import {Injectable, OnInit} from '@angular/core';
import { MessageInterface } from '../../interfaces/Message.interface';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import { AngularFirestore } from "angularfire2/firestore";


@Injectable()
export class MessagesProvider implements OnInit{

    //TODO: que se subscriba el home a esta lista de mesnajes y asi poder usar este servide

    private messages: Array<MessageInterface> = [];
    messages$ = new Subject(); // observable
    fbCollection: any;

    constructor(private fb: AngularFirestore) {
      console.log('Hello MessagesProvider Provider');
    }

    ngOnInit() {
        this.fbCollection = this.fb.collection('messages');
        this.messages = this.fbCollection.valueChanges();
    }

    getMessages() {
        // devuelvo el observable -> no el array de mensajes a pelo
        return this.messages$;
    }

    pushMessage(message: MessageInterface) {
        this.messages.push(message);
        this.messages$.next(this.messages);
        this.fbCollection.add({
            message: event,
            timestamp: new Date().getTime(),
            username: 'Toño'
        });
    }
}
