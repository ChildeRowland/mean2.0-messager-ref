import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { User } from './user';

@Component({
	selector: 'cm-signin',
	template: `
		<section class="col-md-8 col-md-offset-2">
			<form [ngFormModel]="signinForm" (ngSubmit)="onSignin()">

				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" 
						   class="form-control" 
						   id="email"
						   [ngFormControl]="signinForm.find('email')" />
				</div>

				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" 
						   class="form-control" 
						   id="password"
						   [ngFormControl]="signinForm.find('password')" />
				</div>

				<button type="submit" 
						class="btn btn-primary"
						[disabled]="!signinForm.valid">
					Sign In
				</button>
			
			</form>
		</section>
	`
})

export class SigninComponent {
	signinForm: ControlGroup;

	constructor(
		private _fb:FormBuilder, 
		private _router: Router,
		private _authService: AuthService) {

	}

	ngOnInit() {
		this.signinForm = this._fb.group({
			email: ['', Validators.compose([
				Validators.required,
				this.isEmail
			])],
			password: ['', Validators.required]
		});
	}

	onSignin(){
		const user = new User(this.signinForm.value.email, this.signinForm.value.password);

		this._authService.signin(user)
			.subscribe(
				data => {
					localStorage.setItem('token', data.token);
					localStorage.setItem('userId', data.userId);
					this._router.navigateByUrl('/');
				}, err => console.error(err));
	}

	private isEmail(control: Control): {[s: string]: boolean} {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
		if (!control.value.match(regex)) {
			return { invalidMail: true };
		}
	}
}