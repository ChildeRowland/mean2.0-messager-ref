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
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService) {
        this._fb = _fb;
        this._authService = _authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SignupComponent.prototype.onSignup = function () {
        var user = new user_1.User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName);
        this._authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    SignupComponent.prototype.isEmail = function (control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!control.value.match(regex)) {
            return { invalidMail: true };
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'cm-signup',
            template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<form [ngFormModel]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t   class=\"form-control\" \n\t\t\t\t\t\t   id=\"firstName\"\n\t\t\t\t\t\t   [ngFormControl]=\"signupForm.find('firstName')\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t   class=\"form-control\" \n\t\t\t\t\t\t   id=\"lastName\"\n\t\t\t\t\t\t   [ngFormControl]=\"signupForm.find('lastName')\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t<input type=\"email\" \n\t\t\t\t\t\t   class=\"form-control\" \n\t\t\t\t\t\t   id=\"email\"\n\t\t\t\t\t\t   [ngFormControl]=\"signupForm.find('email')\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input type=\"password\" \n\t\t\t\t\t\t   class=\"form-control\" \n\t\t\t\t\t\t   id=\"password\"\n\t\t\t\t\t\t   [ngFormControl]=\"signupForm.find('password')\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" \n\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t[disabled]=\"!signupForm.valid\">\n\t\t\t\t\tSign Up\n\t\t\t\t</button>\n\t\t\t\n\t\t\t</form>\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpGLHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUM5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQW1EN0M7SUFHQyx5QkFBb0IsR0FBZSxFQUFVLFlBQXlCO1FBQWxELFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUV0RSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQzlCLG1CQUFVLENBQUMsUUFBUTtvQkFDbkIsSUFBSSxDQUFDLE9BQU87aUJBQ1osQ0FBQyxDQUFDO1lBQ0gsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBQ25DLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0MsSUFBTSxJQUFJLEdBQVEsSUFBSSxXQUFJLENBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDOUIsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUM1QixTQUFTLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8saUNBQU8sR0FBZixVQUFnQixPQUFnQjtRQUMvQixJQUFJLEtBQUssR0FBRyx3SkFBd0osQ0FBQztRQUVySyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNGLENBQUM7SUF2RkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDI1Q0E0Q1Q7U0FDRCxDQUFDOzt1QkFBQTtJQXlDRixzQkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksdUJBQWUsa0JBdUMzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBDb250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY20tc2lnbnVwJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHRcdFx0PGZvcm0gW25nRm9ybU1vZGVsXT1cInNpZ251cEZvcm1cIiAobmdTdWJtaXQpPVwib25TaWdudXAoKVwiPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0ICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcblx0XHRcdFx0XHRcdCAgIGlkPVwiZmlyc3ROYW1lXCJcblx0XHRcdFx0XHRcdCAgIFtuZ0Zvcm1Db250cm9sXT1cInNpZ251cEZvcm0uZmluZCgnZmlyc3ROYW1lJylcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHQgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuXHRcdFx0XHRcdFx0ICAgaWQ9XCJsYXN0TmFtZVwiXG5cdFx0XHRcdFx0XHQgICBbbmdGb3JtQ29udHJvbF09XCJzaWdudXBGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgXG5cdFx0XHRcdFx0XHQgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuXHRcdFx0XHRcdFx0ICAgaWQ9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHQgICBbbmdGb3JtQ29udHJvbF09XCJzaWdudXBGb3JtLmZpbmQoJ2VtYWlsJylcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgXG5cdFx0XHRcdFx0XHQgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuXHRcdFx0XHRcdFx0ICAgaWQ9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHQgICBbbmdGb3JtQ29udHJvbF09XCJzaWdudXBGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBcblx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcblx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCIhc2lnbnVwRm9ybS52YWxpZFwiPlxuXHRcdFx0XHRcdFNpZ24gVXBcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcblx0XHRcdDwvZm9ybT5cblx0XHQ8L3NlY3Rpb24+XG5cdGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzaWdudXBGb3JtOiBDb250cm9sR3JvdXA7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSApIHtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zaWdudXBGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuXHRcdFx0Zmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuXHRcdFx0bGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG5cdFx0XHRlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuXHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkLFxuXHRcdFx0XHR0aGlzLmlzRW1haWxcblx0XHRcdF0pXSxcblx0XHRcdHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG5cdFx0fSk7XG5cdH1cblxuXHRvblNpZ251cCgpe1xuXHRcdGNvbnN0IHVzZXI6VXNlciA9IG5ldyBVc2VyKFxuXHRcdFx0dGhpcy5zaWdudXBGb3JtLnZhbHVlLmVtYWlsLFxuXHRcdFx0dGhpcy5zaWdudXBGb3JtLnZhbHVlLnBhc3N3b3JkLFxuXHRcdFx0dGhpcy5zaWdudXBGb3JtLnZhbHVlLmZpcnN0TmFtZSxcblx0XHRcdHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5sYXN0TmFtZVxuXHRcdCk7XG5cdFx0dGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHVzZXIpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cblxuXHRwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuXHRcdHZhciByZWdleCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIFxuXHRcdGlmICghY29udHJvbC52YWx1ZS5tYXRjaChyZWdleCkpIHtcblx0XHRcdHJldHVybiB7IGludmFsaWRNYWlsOiB0cnVlIH07XG5cdFx0fVxuXHR9XG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
