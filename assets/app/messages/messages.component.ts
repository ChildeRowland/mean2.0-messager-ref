import { Component } from '@angular/core';

import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';

@Component({
	selector: 'cm-messages',
	directives: [ MessageListComponent, MessageInputComponent ],
	template: `
		<div class="row">
			<cm-message-input></cm-message-input>
		</div>

    	<div class="row">
    		<cm-message-list></cm-message-list>
    	</div>
	`
})

export class MessagesComponent {	

}