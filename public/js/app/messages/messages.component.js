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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2hFLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBZ0JsRTtJQUFBO0lBRUEsQ0FBQztJQWhCRDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsYUFBYTtZQUN2QixVQUFVLEVBQUUsQ0FBRSw2Q0FBb0IsRUFBRSwrQ0FBcUIsQ0FBRTtZQUMzRCxRQUFRLEVBQUUsZ0xBUVQ7U0FDRCxDQUFDOzt5QkFBQTtJQUlGLHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx5QkFBaUIsb0JBRTdCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS1pbnB1dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjbS1tZXNzYWdlcycsXG5cdGRpcmVjdGl2ZXM6IFsgTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudCBdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxjbS1tZXNzYWdlLWlucHV0PjwvY20tbWVzc2FnZS1pbnB1dD5cblx0XHQ8L2Rpdj5cblxuICAgIFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIFx0XHQ8Y20tbWVzc2FnZS1saXN0PjwvY20tbWVzc2FnZS1saXN0PlxuICAgIFx0PC9kaXY+XG5cdGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XHRcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
