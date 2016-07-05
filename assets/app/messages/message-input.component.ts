import { Component, OnInit } from '@angular/core';

import { MessageService } from './message.service';
import { Message } from './message';

@Component({
	selector: 'cm-message-input',
	template: `
		<section class="col-md-8 col-md-offset-2 create-form">
			<form (ngSubmit)="messageSubmit(form.value)" #form="ngForm">
				<div class="form-group">
					<label for="content">Content</label>
					<input type="text" 
						   class="form-control" 
						   id="content"
						   ngControl="content"
						   #contentInput
						   [ngModel]="message?.content" />
				</div>
				<button type="submit" class="btn btn-primary">
					{{ !message ? 'Send Message' : 'Save Message' }}
				</button>
				<button type="button" 
						class="btn btn-danger"
						(click)="onCancelEdit()" 
						*ngIf="message">
						Cancel
					</button>
			</form>
		</section>
	`,
	styles: [`
		.create-form{
			margin-bottom: 19px;
		}
	`]
})

export class MessageInputComponent implements OnInit {
	message: Message = null;

	constructor(private _messageService: MessageService){

	}
	
	ngOnInit() {
		this._messageService.messageIsEditable
			.subscribe(message => this.message = message);
	}

	messageSubmit(form:any) {
		if (this.message) {
			// edit
			this.message.content = form.content;
			this._messageService.updateMessage(this.message)
				.subscribe(
					res => console.log(res),
					err => console.error(err)
				);
			this.message = null;
		} else {
			// save
			const message:Message = new Message(form.content, null, null, 'Taco');
			this._messageService.addMessage(message)
				.subscribe(
					res => {
						console.log(res);
						this._messageService.messages.push(res);
					},
					err => console.error(err));
		}
	}

	onCancelEdit() {
		this.message = null;
	}
}


