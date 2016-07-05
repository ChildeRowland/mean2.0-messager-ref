import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Control, Validators } from '@angular/common';

import { User } from './user';
import { AuthService } from './auth.service';

@Component({
	selector: 'cm-signup',
	template: `
		<section class="col-md-8 col-md-offset-2">
			<form [ngFormModel]="signupForm" (ngSubmit)="onSignup()">

				<div class="form-group">
					<label for="firstName">First Name</label>
					<input type="text" 
						   class="form-control" 
						   id="firstName"
						   [ngFormControl]="signupForm.find('firstName')" />
				</div>

				<div class="form-group">
					<label for="lastName">Last Name</label>
					<input type="text" 
						   class="form-control" 
						   id="lastName"
						   [ngFormControl]="signupForm.find('lastName')" />
				</div>

				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" 
						   class="form-control" 
						   id="email"
						   [ngFormControl]="signupForm.find('email')" />
				</div>

				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" 
						   class="form-control" 
						   id="password"
						   [ngFormControl]="signupForm.find('password')" />
				</div>

				<button type="submit" 
						class="btn btn-primary"
						[disabled]="!signupForm.valid">
					Sign Up
				</button>
			
			</form>
		</section>
	`
})

export class SignupComponent implements OnInit {
	signupForm: ControlGroup;

	constructor(private _fb:FormBuilder, private _authService: AuthService ) {

	}

	ngOnInit() {
		this.signupForm = this._fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.compose([
				Validators.required,
				this.isEmail
			])],
			password: ['', Validators.required]
		});
	}

	onSignup(){
		const user:User = new User(
			this.signupForm.value.email,
			this.signupForm.value.password,
			this.signupForm.value.firstName,
			this.signupForm.value.lastName
		);
		this._authService.signup(user)
			.subscribe(
				data => console.log(data),
				err => console.log(err));
	}

	private isEmail(control: Control): {[s: string]: boolean} {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
		if (!control.value.match(regex)) {
			return { invalidMail: true };
		}
	}
}



