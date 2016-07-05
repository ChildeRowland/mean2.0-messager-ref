"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var header_component_1 = require('./header.component');
var messages_component_1 = require('./messages/messages.component');
var authentication_component_1 = require('./auth/authentication.component');
var AppComponent = (function () {
    function AppComponent() {
        console.log('app started');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
            template: " \n    \t<div class=\"container\">\n\t\t\t<cm-header></cm-header>\n\t\t\t\n\t\t\t<router-outlet></router-outlet>\n    \t</div>\n    "
        }),
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxtQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQW1CMUU7SUFDQztRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXBCRjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsQ0FBRSwwQkFBaUIsRUFBRSxrQ0FBZSxDQUFFO1lBQ2xELFFBQVEsRUFBRSxzSUFNVDtTQUNKLENBQUM7UUFFRCxlQUFNLENBQUM7WUFDUCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO1lBQzFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUU7U0FDcEQsQ0FBQzs7b0JBQUE7SUFPRixtQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksb0JBQVksZUFLeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCBdLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGNtLWhlYWRlcj48L2NtLWhlYWRlcj5cblx0XHRcdFxuXHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIFx0PC9kaXY+XG4gICAgYFxufSlcblxuQFJvdXRlcyhbXG5cdHtwYXRoOiAnLycsIGNvbXBvbmVudDogTWVzc2FnZXNDb21wb25lbnQgfSxcblx0e3BhdGg6ICcvYXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnQgfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0Y29uc29sZS5sb2coJ2FwcCBzdGFydGVkJyk7XG5cdH1cblxufVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
