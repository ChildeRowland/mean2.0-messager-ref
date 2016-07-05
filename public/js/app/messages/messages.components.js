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
var message_list_component_1 = require('./message-list.component');
var message_input_component_1 = require('./message-input.component');
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'cm-messages',
            directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent],
            template: "\n\t\t<div class=\"row\">\n\t\t\t<cm-message-input></cm-message-input>\n\t\t</div>\n\n    \t<div class=\"row\">\n    \t\t<cm-message-list></cm-message-list>\n    \t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyx1Q0FBcUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNoRSx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQWdCbEU7SUFBQTtJQUVBLENBQUM7SUFoQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsVUFBVSxFQUFFLENBQUUsNkNBQW9CLEVBQUUsK0NBQXFCLENBQUU7WUFDM0QsUUFBUSxFQUFFLGdMQVFUO1NBQ0QsQ0FBQzs7eUJBQUE7SUFJRix3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkseUJBQWlCLG9CQUU3QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVzc2FnZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWlucHV0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NtLW1lc3NhZ2VzJyxcblx0ZGlyZWN0aXZlczogWyBNZXNzYWdlTGlzdENvbXBvbmVudCwgTWVzc2FnZUlucHV0Q29tcG9uZW50IF0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGNtLW1lc3NhZ2UtaW5wdXQ+PC9jbS1tZXNzYWdlLWlucHV0PlxuXHRcdDwvZGl2PlxuXG4gICAgXHQ8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHRcdDxjbS1tZXNzYWdlLWxpc3Q+PC9jbS1tZXNzYWdlLWxpc3Q+XG4gICAgXHQ8L2Rpdj5cblx0YFxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcdFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
