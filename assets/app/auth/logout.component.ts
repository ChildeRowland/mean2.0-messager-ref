import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	selector: 'cm-logout',
	template: `
		<section class="col-md-8 col-md-offset-2">
			<button class="btn btn-warning" (click)="onLogout()">Logout</button>
		</section>
	`
})

export class LogoutComponent {
	constructor(private _router: Router, private _authService: AuthService) {

	}
	
	onLogout() {
		this._authService.logout();
		this._router.navigateByUrl('/auth');
	}
}