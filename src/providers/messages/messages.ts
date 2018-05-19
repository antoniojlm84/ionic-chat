import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageInterface } from '../../interfaces/Message.interface';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MessagesProvider {

    private messages: Array<MessageInterface> = [];
    messages$ = new Subject(); // observable

    constuctor() {
      console.log('Hello MessagesProvider Provider');
    }

    getMessages() {
        // devuelvo el observable -> no el array de mensajes a pelo
        return this.messages$;
    }

}
