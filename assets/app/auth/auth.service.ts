import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from './user';

@Injectable()
export class AuthService {
	private _url = 'http://localhost:3000/user';
	
	constructor(private _http: Http) {

	}

	signup(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({ 'Content-Type': 'application/json' });

		return this._http.post(this._url, body, {headers: headers})
			.map(res => res.json())
			.catch(err => Observable.throw(err.json()));
	}

	signin(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({ 'Content-Type': 'application/json' });

		return this._http.post(this._url + '/signin', body, {headers: headers})
			.map(res => res.json())
			.catch(err => Observable.throw(err.json()));
	}

	logout() {
		localStorage.clear();
	}

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}
}