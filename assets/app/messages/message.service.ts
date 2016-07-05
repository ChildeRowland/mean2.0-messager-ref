import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Message } from './message';

@Injectable()
export class MessageService {
	messages: Message[] = [];
	messageIsEditable = new EventEmitter<Message>();
	private _url = 'http://localhost:3000/message';

	constructor(private _http: Http) {

	}

	getMessages(){
		return this._http.get(this._url)
			.map(res => {
				const data = res.json().obj;
				const resArr: any[] = [];
				for ( let i = 0; i < data.length; i++ ) {
					let message = new Message(data[i].content, data[i].user._id, data[i]._id, data[i].user.firstName);
					resArr.push(message);
				}
				return resArr;
			})
			.catch(err => Observable.throw(err.json()));
	}

	addMessage(message: Message){
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
		
		return this._http.post(this._url + token, body, {headers: headers})
			.map(res => {
				const data = res.json().obj;
				let message = new Message(data.content, data.user._id, data._id, data.user.firstName );
				return message;
			})
			.catch(err => Observable.throw(err.json()));
	}

	updateMessage(message: Message) {
		const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        
        return this._http.patch(this._url + '/' + message.messageId + token, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
	}

	editMessage(message: Message){
		this.messageIsEditable.emit(message);
	}

	deleteMessage(message: Message) {
		const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.messages.splice(this.messages.indexOf(message), 1);

        return this._http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
	}
}