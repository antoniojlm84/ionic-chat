import {Component, Input} from '@angular/core';

@Component({
  selector: 'chat-board',
  templateUrl: 'board.html'
})
export class BoardComponent {

    @Input() messages: any;

    constructor() {
    }
}
