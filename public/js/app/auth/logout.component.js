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
var auth_service_1 = require('./auth.service');
var LogoutComponent = (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.onLogout = function () {
        this._authService.logout();
        this._router.navigateByUrl('/auth');
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'cm-logout',
            template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<button class=\"btn btn-warning\" (click)=\"onLogout()\">Logout</button>\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBVzdDO0lBQ0MseUJBQW9CLE9BQWUsRUFBVSxZQUF5QjtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFFdEUsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFqQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHdKQUlUO1NBQ0QsQ0FBQzs7dUJBQUE7SUFXRixzQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksdUJBQWUsa0JBUzNCLENBQUEiLCJmaWxlIjoiYXV0aC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY20tbG9nb3V0Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIChjbGljayk9XCJvbkxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG5cdFx0PC9zZWN0aW9uPlxuXHRgXG59KVxuXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuXG5cdH1cblx0XG5cdG9uTG9nb3V0KCkge1xuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYXV0aCcpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
