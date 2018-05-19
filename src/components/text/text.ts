import {Component, Input} from '@angular/core';
import{ ContactPage } from "../../pages/contact/contact";
/**
 * Generated class for the TextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-text',
  templateUrl: 'text.html'
})
export class TextComponent {

    message: string;
    buttonLabel: string;
    @Input() loggedUser: any;
    contactPage: any;

    constructor() {
        this.buttonLabel = 'Send';
        this.contactPage = ContactPage;
    }

    submmitted() {
        const msgDate = new Date();
        const dateText = `${msgDate.getDay()}-${msgDate.getMonth() + 1}-${msgDate.getFullYear()} ${msgDate.getHours()}:${msgDate.getMinutes()}`;

        /*const message: MessageInterface = {
            username: this.loggedUser['name']['last'] + ', ' + this.loggedUser['name']['first'],
            message: this.message,
            date: dateText,
            read: false
        };

        this.messageService.pushMessage(message);*/
    };
}
