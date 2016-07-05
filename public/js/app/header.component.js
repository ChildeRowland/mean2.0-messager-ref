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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'cm-header',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n\t\t<header class=\"row\">\n\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t\t<li><a [routerLink]=\"['']\">Messenger</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['auth']\">Authentication</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t",
            styles: ["\n\t\theader {\n            margin-bottom: 20px;\n        }\n    \n        ul {\n          text-align: center;  \n        }\n        \n        li {\n            float: none;\n            display: inline-block;\n        }\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQStCcEQ7SUFBQTtJQUVBLENBQUM7SUEvQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsVUFBVSxFQUFFLENBQUUsMEJBQWlCLENBQUU7WUFDakMsUUFBUSxFQUFFLG1TQVNUO1lBQ0QsTUFBTSxFQUFFLENBQUMsa09BYVIsQ0FBQztTQUNGLENBQUM7O3VCQUFBO0lBSUYsc0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHVCQUFlLGtCQUUzQixDQUFBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY20taGVhZGVyJyxcblx0ZGlyZWN0aXZlczogWyBST1VURVJfRElSRUNUSVZFUyBdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxoZWFkZXIgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxuYXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0XHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxuXHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJyddXCI+TWVzc2VuZ2VyPC9hPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnYXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdDwvaGVhZGVyPlxuXHRgLFxuXHRzdHlsZXM6IFtgXG5cdFx0aGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXHRgXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
