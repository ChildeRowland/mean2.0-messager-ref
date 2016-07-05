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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var user_1 = require('./user');
var SigninComponent = (function () {
    function SigninComponent(_fb, _router, _authService) {
        this._fb = _fb;
        this._router = _router;
        this._authService = _authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this._fb.group({
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SigninComponent.prototype.onSignin = function () {
        var _this = this;
        var user = new user_1.User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this._router.navigateByUrl('/');
        }, function (err) { return console.error(err); });
    };
    SigninComponent.prototype.isEmail = function (control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!control.value.match(regex)) {
            return { invalidMail: true };
        }
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'cm-signin',
            template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<form [ngFormModel]=\"signinForm\" (ngSubmit)=\"onSignin()\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t<input type=\"email\" \n\t\t\t\t\t\t   class=\"form-control\" \n\t\t\t\t\t\t   id=\"email\"\n\t\t\t\t\t\t   [ngFormControl]=\"signinForm.find('email')\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input type=\"password\" \n\t\t\t\t\t\t   class=\"form-control\" \n\t\t\t\t\t\t   id=\"password\"\n\t\t\t\t\t\t   [ngFormControl]=\"signinForm.find('password')\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" \n\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t[disabled]=\"!signinForm.valid\">\n\t\t\t\t\tSign In\n\t\t\t\t</button>\n\t\t\t\n\t\t\t</form>\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, auth_service_1.AuthService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pGLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQW1DOUI7SUFHQyx5QkFDUyxHQUFlLEVBQ2YsT0FBZSxFQUNmLFlBQXlCO1FBRnpCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7SUFFbEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2hDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDOUIsbUJBQVUsQ0FBQyxRQUFRO29CQUNuQixJQUFJLENBQUMsT0FBTztpQkFDWixDQUFDLENBQUM7WUFDSCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRBLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNULFVBQUEsSUFBSTtZQUNILFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxpQ0FBTyxHQUFmLFVBQWdCLE9BQWdCO1FBQy9CLElBQUksS0FBSyxHQUFHLHdKQUF3SixDQUFDO1FBRXJLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0YsQ0FBQztJQXZFRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUseTJCQTRCVDtTQUNELENBQUM7O3VCQUFBO0lBeUNGLHNCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSx1QkFBZSxrQkF1QzNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIENvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY20tc2lnbmluJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHRcdFx0PGZvcm0gW25nRm9ybU1vZGVsXT1cInNpZ25pbkZvcm1cIiAobmdTdWJtaXQpPVwib25TaWduaW4oKVwiPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBcblx0XHRcdFx0XHRcdCAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXG5cdFx0XHRcdFx0XHQgICBpZD1cImVtYWlsXCJcblx0XHRcdFx0XHRcdCAgIFtuZ0Zvcm1Db250cm9sXT1cInNpZ25pbkZvcm0uZmluZCgnZW1haWwnKVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcblx0XHRcdFx0XHRcdCAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXG5cdFx0XHRcdFx0XHQgICBpZD1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdCAgIFtuZ0Zvcm1Db250cm9sXT1cInNpZ25pbkZvcm0uZmluZCgncGFzc3dvcmQnKVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuXHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cIiFzaWduaW5Gb3JtLnZhbGlkXCI+XG5cdFx0XHRcdFx0U2lnbiBJblxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvc2VjdGlvbj5cblx0YFxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCB7XG5cdHNpZ25pbkZvcm06IENvbnRyb2xHcm91cDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9mYjpGb3JtQnVpbGRlciwgXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2lnbmluRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcblx0XHRcdGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG5cdFx0XHRcdFZhbGlkYXRvcnMucmVxdWlyZWQsXG5cdFx0XHRcdHRoaXMuaXNFbWFpbFxuXHRcdFx0XSldLFxuXHRcdFx0cGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblx0XHR9KTtcblx0fVxuXG5cdG9uU2lnbmluKCl7XG5cdFx0Y29uc3QgdXNlciA9IG5ldyBVc2VyKHRoaXMuc2lnbmluRm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5zaWduaW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcblxuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25pbih1c2VyKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcblx0XHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuXHRcdFx0XHR9LCBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblx0fVxuXG5cdHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XG5cdFx0dmFyIHJlZ2V4ID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgXG5cdFx0aWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKHJlZ2V4KSkge1xuXHRcdFx0cmV0dXJuIHsgaW52YWxpZE1haWw6IHRydWUgfTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
