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
var message_service_1 = require('./message.service');
var message_1 = require('./message');
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
        this.message = null;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageIsEditable
            .subscribe(function (message) { return _this.message = message; });
    };
    MessageInputComponent.prototype.messageSubmit = function (form) {
        var _this = this;
        if (this.message) {
            // edit
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(function (res) { return console.log(res); }, function (err) { return console.error(err); });
            this.message = null;
        }
        else {
            // save
            var message = new message_1.Message(form.content, null, null, 'Taco');
            this._messageService.addMessage(message)
                .subscribe(function (res) {
                console.log(res);
                _this._messageService.messages.push(res);
            }, function (err) { return console.error(err); });
        }
    };
    MessageInputComponent.prototype.onCancelEdit = function () {
        this.message = null;
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'cm-message-input',
            template: "\n\t\t<section class=\"col-md-8 col-md-offset-2 create-form\">\n\t\t\t<form (ngSubmit)=\"messageSubmit(form.value)\" #form=\"ngForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"content\">Content</label>\n\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t   class=\"form-control\" \n\t\t\t\t\t\t   id=\"content\"\n\t\t\t\t\t\t   ngControl=\"content\"\n\t\t\t\t\t\t   #contentInput\n\t\t\t\t\t\t   [ngModel]=\"message?.content\" />\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">\n\t\t\t\t\t{{ !message ? 'Send Message' : 'Save Message' }}\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" \n\t\t\t\t\t\tclass=\"btn btn-danger\"\n\t\t\t\t\t\t(click)=\"onCancelEdit()\" \n\t\t\t\t\t\t*ngIf=\"message\">\n\t\t\t\t\t\tCancel\n\t\t\t\t\t</button>\n\t\t\t</form>\n\t\t</section>\n\t",
            styles: ["\n\t\t.create-form{\n\t\t\tmargin-bottom: 19px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBbUNwQztJQUdDLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFGbkQsWUFBTyxHQUFZLElBQUksQ0FBQztJQUl4QixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQUdDO1FBRkEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUI7YUFDcEMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkNBQWEsR0FBYixVQUFjLElBQVE7UUFBdEIsaUJBcUJDO1FBcEJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU87WUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzlDLFNBQVMsQ0FDVCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLEVBQ3ZCLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDekIsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE9BQU87WUFDUCxJQUFNLE9BQU8sR0FBVyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDdEMsU0FBUyxDQUNULFVBQUEsR0FBRztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDRixDQUFDO0lBRUQsNENBQVksR0FBWjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUF0RUY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsb3pCQXVCVDtZQUNELE1BQU0sRUFBRSxDQUFDLDREQUlSLENBQUM7U0FDRixDQUFDOzs2QkFBQTtJQXdDRiw0QkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksNkJBQXFCLHdCQXNDakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NtLW1lc3NhZ2UtaW5wdXQnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yIGNyZWF0ZS1mb3JtXCI+XG5cdFx0XHQ8Zm9ybSAobmdTdWJtaXQpPVwibWVzc2FnZVN1Ym1pdChmb3JtLnZhbHVlKVwiICNmb3JtPVwibmdGb3JtXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdCAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXG5cdFx0XHRcdFx0XHQgICBpZD1cImNvbnRlbnRcIlxuXHRcdFx0XHRcdFx0ICAgbmdDb250cm9sPVwiY29udGVudFwiXG5cdFx0XHRcdFx0XHQgICAjY29udGVudElucHV0XG5cdFx0XHRcdFx0XHQgICBbbmdNb2RlbF09XCJtZXNzYWdlPy5jb250ZW50XCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0e3sgIW1lc3NhZ2UgPyAnU2VuZCBNZXNzYWdlJyA6ICdTYXZlIE1lc3NhZ2UnIH19XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcblx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIm9uQ2FuY2VsRWRpdCgpXCIgXG5cdFx0XHRcdFx0XHQqbmdJZj1cIm1lc3NhZ2VcIj5cblx0XHRcdFx0XHRcdENhbmNlbFxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvc2VjdGlvbj5cblx0YCxcblx0c3R5bGVzOiBbYFxuXHRcdC5jcmVhdGUtZm9ybXtcblx0XHRcdG1hcmdpbi1ib3R0b206IDE5cHg7XG5cdFx0fVxuXHRgXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdG1lc3NhZ2U6IE1lc3NhZ2UgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7XG5cblx0fVxuXHRcblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZUlzRWRpdGFibGVcblx0XHRcdC5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlKTtcblx0fVxuXG5cdG1lc3NhZ2VTdWJtaXQoZm9ybTphbnkpIHtcblx0XHRpZiAodGhpcy5tZXNzYWdlKSB7XG5cdFx0XHQvLyBlZGl0XG5cdFx0XHR0aGlzLm1lc3NhZ2UuY29udGVudCA9IGZvcm0uY29udGVudDtcblx0XHRcdHRoaXMuX21lc3NhZ2VTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpLFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcblx0XHRcdFx0KTtcblx0XHRcdHRoaXMubWVzc2FnZSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHNhdmVcblx0XHRcdGNvbnN0IG1lc3NhZ2U6TWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgbnVsbCwgJ1RhY28nKTtcblx0XHRcdHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRcdHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnB1c2gocmVzKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXHRcdH1cblx0fVxuXG5cdG9uQ2FuY2VsRWRpdCgpIHtcblx0XHR0aGlzLm1lc3NhZ2UgPSBudWxsO1xuXHR9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
