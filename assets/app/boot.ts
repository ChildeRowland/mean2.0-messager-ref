///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from "./app.component";
import { MessageService } from './messages/message.service';
import { AuthService } from './auth/auth.service';

bootstrap(AppComponent, [ 
	ROUTER_PROVIDERS, 
	MessageService,
	AuthService,
	HTTP_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy}) 
]);