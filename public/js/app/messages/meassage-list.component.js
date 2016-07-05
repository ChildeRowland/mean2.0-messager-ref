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
var message_1 = require('./message');
var MeassageListComponent = (function () {
    function MeassageListComponent() {
        this.messages = [
            new message_1.Message("Supper Beans", null, null, "Taco"),
            new message_1.Message("Leader Up", null, null, "Taco")
        ];
    }
    MeassageListComponent.prototype.editClicked = function (event) {
        this.message.content = event;
    };
    MeassageListComponent = __decorate([
        core_1.Component({
            selector: 'cm-measage-list',
            directives: [message_component_1.MessageComponent],
            template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<cm-message *ngFor=\"let message of messages\"\n\t\t\t\t\t\t[message]=\"message\" \n\t\t\t\t\t\t(editClicked)=\"editClicked($event)\">\n\t\t\t</cm-message>\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], MeassageListComponent);
    return MeassageListComponent;
}());
exports.MeassageListComponent = MeassageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lYXNzYWdlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBZ0JwQztJQUFBO1FBQ0MsYUFBUSxHQUFjO1lBQ3JCLElBQUksaUJBQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7WUFDL0MsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztTQUM1QyxDQUFDO0lBS0gsQ0FBQztJQUhBLDJDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBdEJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLENBQUUsb0NBQWdCLENBQUU7WUFDaEMsUUFBUSxFQUFFLDJPQU9UO1NBRUQsQ0FBQzs7NkJBQUE7SUFXRiw0QkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNkJBQXFCLHdCQVNqQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lYXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY20tbWVhc2FnZS1saXN0Jyxcblx0ZGlyZWN0aXZlczogWyBNZXNzYWdlQ29tcG9uZW50IF0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0XHRcdDxjbS1tZXNzYWdlICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCJcblx0XHRcdFx0XHRcdFttZXNzYWdlXT1cIm1lc3NhZ2VcIiBcblx0XHRcdFx0XHRcdChlZGl0Q2xpY2tlZCk9XCJlZGl0Q2xpY2tlZCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2NtLW1lc3NhZ2U+XG5cdFx0PC9zZWN0aW9uPlxuXHRgXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZWFzc2FnZUxpc3RDb21wb25lbnQge1xuXHRtZXNzYWdlczogTWVzc2FnZVtdID0gW1xuXHRcdG5ldyBNZXNzYWdlKFwiU3VwcGVyIEJlYW5zXCIsIG51bGwsIG51bGwsIFwiVGFjb1wiKSxcblx0XHRuZXcgTWVzc2FnZShcIkxlYWRlciBVcFwiLCBudWxsLCBudWxsLCBcIlRhY29cIilcblx0XTtcblxuXHRlZGl0Q2xpY2tlZChldmVudCl7XG5cdFx0dGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBldmVudDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
