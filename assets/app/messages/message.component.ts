import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MessageService } from './message.service';
import { Message } from './message';

@Component({
	selector: 'cm-message',
	template: `
		<article class="panel panel-default" 
				 *ngIf="message">
        	<div class="panel-body"
        		 [ngStyle]="{ 'background-color': color }" 
				 (mouseenter)="color = 'deeppink'"
				 (mouseleave)="color = 'white'">
				{{ message.content }}
        	</div>
        	<footer class="panel-footer">
        		<div class="author">
					{{ message.username }}
	        	</div>
	        	<div class="config" *ngIf="belongsToUser()">
	        		<a (click)="onClick()">Edit</a>
	        		<a (click)="onDelete()">Delete</a>
	        	</div>
        	</footer>
        </article>
	`,
    styles: [`
		.author {
			display: inline-block;
			font-style: italic;
			font-size: 12px;
			width: 80%;
		}
		.config {
			display: inline-block;
			text-align: right;
			font-size: 12px;
			width: 19%;
		}
    `]
})

export class MessageComponent {
	@Input() message:Message;
	@Output() editClicked = new EventEmitter<string>();
	color = 'white';

	constructor(private _messageService: MessageService) {

	}

	onClick() {
		this._messageService.editMessage(this.message);
	}

	onDelete() {
		this._messageService.deleteMessage(this.message)
			.subscribe(
				data => console.log(data),
				err => console.error(err)
			);
	}

	belongsToUser() {
		return localStorage.getItem('userId') == this.message.userId;
	}
}



