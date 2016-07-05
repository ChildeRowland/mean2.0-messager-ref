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
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.editClicked = new core_1.EventEmitter();
        this.color = 'white';
    }
    MessageComponent.prototype.onClick = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.error(err); });
    };
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') == this.message.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'cm-message',
            template: "\n\t\t<article class=\"panel panel-default\" \n\t\t\t\t *ngIf=\"message\">\n        \t<div class=\"panel-body\"\n        \t\t [ngStyle]=\"{ 'background-color': color }\" \n\t\t\t\t (mouseenter)=\"color = 'deeppink'\"\n\t\t\t\t (mouseleave)=\"color = 'white'\">\n\t\t\t\t{{ message.content }}\n        \t</div>\n        \t<footer class=\"panel-footer\">\n        \t\t<div class=\"author\">\n\t\t\t\t\t{{ message.username }}\n\t        \t</div>\n\t        \t<div class=\"config\" *ngIf=\"belongsToUser()\">\n\t        \t\t<a (click)=\"onClick()\">Edit</a>\n\t        \t\t<a (click)=\"onDelete()\">Delete</a>\n\t        \t</div>\n        \t</footer>\n        </article>\n\t",
            styles: ["\n\t\t.author {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-style: italic;\n\t\t\tfont-size: 12px;\n\t\t\twidth: 80%;\n\t\t}\n\t\t.config {\n\t\t\tdisplay: inline-block;\n\t\t\ttext-align: right;\n\t\t\tfont-size: 12px;\n\t\t\twidth: 19%;\n\t\t}\n    "]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFFdkUsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBd0NwQztJQUtDLDBCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIekMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUNuRCxVQUFLLEdBQUcsT0FBTyxDQUFDO0lBSWhCLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5QyxTQUFTLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQ3pCLENBQUM7SUFDSixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzlELENBQUM7SUF0QkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBeENWO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxncUJBbUJUO1lBQ0UsTUFBTSxFQUFFLENBQUMsMlBBYVIsQ0FBQztTQUNMLENBQUM7O3dCQUFBO0lBMEJGLHVCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSx3QkFBZ0IsbUJBd0I1QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY20tbWVzc2FnZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgXG5cdFx0XHRcdCAqbmdJZj1cIm1lc3NhZ2VcIj5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiXG4gICAgICAgIFx0XHQgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yIH1cIiBcblx0XHRcdFx0IChtb3VzZWVudGVyKT1cImNvbG9yID0gJ2RlZXBwaW5rJ1wiXG5cdFx0XHRcdCAobW91c2VsZWF2ZSk9XCJjb2xvciA9ICd3aGl0ZSdcIj5cblx0XHRcdFx0e3sgbWVzc2FnZS5jb250ZW50IH19XG4gICAgICAgIFx0PC9kaXY+XG4gICAgICAgIFx0PGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICBcdFx0PGRpdiBjbGFzcz1cImF1dGhvclwiPlxuXHRcdFx0XHRcdHt7IG1lc3NhZ2UudXNlcm5hbWUgfX1cblx0ICAgICAgICBcdDwvZGl2PlxuXHQgICAgICAgIFx0PGRpdiBjbGFzcz1cImNvbmZpZ1wiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCI+XG5cdCAgICAgICAgXHRcdDxhIChjbGljayk9XCJvbkNsaWNrKClcIj5FZGl0PC9hPlxuXHQgICAgICAgIFx0XHQ8YSAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cblx0ICAgICAgICBcdDwvZGl2PlxuICAgICAgICBcdDwvZm9vdGVyPlxuICAgICAgICA8L2FydGljbGU+XG5cdGAsXG4gICAgc3R5bGVzOiBbYFxuXHRcdC5hdXRob3Ige1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0d2lkdGg6IDgwJTtcblx0XHR9XG5cdFx0LmNvbmZpZyB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdHdpZHRoOiAxOSU7XG5cdFx0fVxuICAgIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIG1lc3NhZ2U6TWVzc2FnZTtcblx0QE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdGNvbG9yID0gJ3doaXRlJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcblxuXHR9XG5cblx0b25DbGljaygpIHtcblx0XHR0aGlzLl9tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xuXHR9XG5cblx0b25EZWxldGUoKSB7XG5cdFx0dGhpcy5fbWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0XHQpO1xuXHR9XG5cblx0YmVsb25nc1RvVXNlcigpIHtcblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID09IHRoaXMubWVzc2FnZS51c2VySWQ7XG5cdH1cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
