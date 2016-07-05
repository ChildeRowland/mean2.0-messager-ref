import { Component, OnInit } from '@angular/core';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
	selector: 'cm-message-list',
	directives: [ MessageComponent ],
	template: `
		<section class="col-md-8 col-md-offset-2">
			<cm-message *ngFor="let message of messages"
						[message]="message" 
						(editClicked)="editClicked(message, $event)">
			</cm-message>
		</section>
	`

})

export class MessageListComponent implements OnInit {
	messages: Message[];

	constructor(private _messageService: MessageService) {

	}

	ngOnInit() {
		this._messageService.getMessages()
			.subscribe(res => {
				this.messages = res;
				this._messageService.messages = res;
			});
	}

	editClicked(message, event){
		message.content = event;
	}
}