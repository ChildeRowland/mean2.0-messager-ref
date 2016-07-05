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
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var logout_component_1 = require('./logout.component');
var auth_service_1 = require('./auth.service');
var AuthenticationComponent = (function () {
    function AuthenticationComponent(_authService) {
        this._authService = _authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'cm-auth',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n\t\t<header class=\"row spacing\">\n\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t<li><a [routerLink]=\"['./signup']\">Signup</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['./']\" *ngIf=\"!isLoggedIn()\">Signin</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['./logout']\" *ngIf=\"isLoggedIn()\">Logout</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t\t<div class=\"row spacing\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t"
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUEyQjdDO0lBRUMsaUNBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBRTdDLENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQWpDRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixVQUFVLEVBQUUsQ0FBRSwwQkFBaUIsQ0FBRTtZQUNqQyxRQUFRLEVBQUUsd2VBYVQ7U0FDRCxDQUFDO1FBRUQsZUFBTSxDQUFDO1lBQ1AsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUN6QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7U0FDL0MsQ0FBQzs7K0JBQUE7SUFZRiw4QkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksK0JBQXVCLDBCQVVuQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NtLWF1dGgnLFxuXHRkaXJlY3RpdmVzOiBbIFJPVVRFUl9ESVJFQ1RJVkVTIF0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGhlYWRlciBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG5cdFx0XHQ8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG5cdFx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxuXHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vc2lnbnVwJ11cIj5TaWdudXA8L2E+PC9saT5cblx0XHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuLyddXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+U2lnbmluPC9hPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9sb2dvdXQnXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+TG9nb3V0PC9hPjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L25hdj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cblx0XHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblx0XHQ8L2Rpdj5cblx0YFxufSlcblxuQFJvdXRlcyhbXG5cdHsgcGF0aDogJy9zaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICcvJywgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50IH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG5cblx0fVxuXG5cdGlzTG9nZ2VkSW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcblx0fVxuXG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
