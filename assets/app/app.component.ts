import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './header.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';

@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES, HeaderComponent ],
    template: ` 
    	<div class="container">
			<cm-header></cm-header>
			
			<router-outlet></router-outlet>
    	</div>
    `
})

@Routes([
	{path: '/', component: MessagesComponent },
	{path: '/auth', component: AuthenticationComponent }
])

export class AppComponent {
	constructor(){
		console.log('app started');
	}

}




