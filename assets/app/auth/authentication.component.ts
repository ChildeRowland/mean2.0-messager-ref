import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { AuthService } from './auth.service';

@Component({
	selector: 'cm-auth',
	directives: [ ROUTER_DIRECTIVES ],
	template: `
		<header class="row spacing">
			<nav class="col-md-8 col-md-offset-2">
				<ul class="nav nav-tabs">
					<li><a [routerLink]="['./signup']" *ngIf="isLoggedIn()>Sign Up</a></li>
					<li><a [routerLink]="['./']" *ngIf="!isLoggedIn()">Sign In</a></li>
					<li><a [routerLink]="['./logout']" *ngIf="isLoggedIn()">Logout</a></li>
				</ul>
			</nav>
		</header>
		<div class="row spacing">
			<router-outlet></router-outlet>
		</div>
	`
})

@Routes([
	{ path: '/signup', component: SignupComponent },
	{ path: '/', component: SigninComponent },
	{ path: '/logout', component: LogoutComponent }
])

export class AuthenticationComponent {

	constructor(private _authService: AuthService) {

	}

	isLoggedIn() {
		return this._authService.isLoggedIn();
	}

}



