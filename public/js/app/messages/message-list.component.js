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
var message_component_1 = require('./message.component');
var message_service_1 = require('./message.service');
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessages()
            .subscribe(function (res) {
            _this.messages = res;
            _this._messageService.messages = res;
        });
    };
    MessageListComponent.prototype.editClicked = function (message, event) {
        message.content = event;
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'cm-message-list',
            directives: [message_component_1.MessageComponent],
            template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<cm-message *ngFor=\"let message of messages\"\n\t\t\t\t\t\t[message]=\"message\" \n\t\t\t\t\t\t(editClicked)=\"editClicked(message, $event)\">\n\t\t\t</cm-message>\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQWlCbkQ7SUFHQyw4QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBRW5ELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTthQUNoQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxPQUFPLEVBQUUsS0FBSztRQUN6QixPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBL0JGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLENBQUUsb0NBQWdCLENBQUU7WUFDaEMsUUFBUSxFQUFFLG9QQU9UO1NBRUQsQ0FBQzs7NEJBQUE7SUFvQkYsMkJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLDRCQUFvQix1QkFrQmhDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NtLW1lc3NhZ2UtbGlzdCcsXG5cdGRpcmVjdGl2ZXM6IFsgTWVzc2FnZUNvbXBvbmVudCBdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG5cdFx0XHQ8Y20tbWVzc2FnZSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiXG5cdFx0XHRcdFx0XHRbbWVzc2FnZV09XCJtZXNzYWdlXCIgXG5cdFx0XHRcdFx0XHQoZWRpdENsaWNrZWQpPVwiZWRpdENsaWNrZWQobWVzc2FnZSwgJGV2ZW50KVwiPlxuXHRcdFx0PC9jbS1tZXNzYWdlPlxuXHRcdDwvc2VjdGlvbj5cblx0YFxuXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRtZXNzYWdlczogTWVzc2FnZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLl9tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcygpXG5cdFx0XHQuc3Vic2NyaWJlKHJlcyA9PiB7XG5cdFx0XHRcdHRoaXMubWVzc2FnZXMgPSByZXM7XG5cdFx0XHRcdHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzID0gcmVzO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRlZGl0Q2xpY2tlZChtZXNzYWdlLCBldmVudCl7XG5cdFx0bWVzc2FnZS5jb250ZW50ID0gZXZlbnQ7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
