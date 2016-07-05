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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var message_1 = require('./message');
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.messages = [];
        this.messageIsEditable = new core_1.EventEmitter();
        this._url = 'http://localhost:3000/message';
    }
    MessageService.prototype.getMessages = function () {
        return this._http.get(this._url)
            .map(function (res) {
            var data = res.json().obj;
            var resArr = [];
            for (var i = 0; i < data.length; i++) {
                var message = new message_1.Message(data[i].content, data[i].user._id, data[i]._id, data[i].user.firstName);
                resArr.push(message);
            }
            return resArr;
        })
            .catch(function (err) { return Observable_1.Observable.throw(err.json()); });
    };
    MessageService.prototype.addMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post(this._url + token, body, { headers: headers })
            .map(function (res) {
            var data = res.json().obj;
            var message = new message_1.Message(data.content, data.user._id, data._id, data.user.firstName);
            return message;
        })
            .catch(function (err) { return Observable_1.Observable.throw(err.json()); });
    };
    MessageService.prototype.updateMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch(this._url + '/' + message.messageId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEditable.emit(message);
    };
    MessageService.prototype.deleteMessage = function (message) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pELHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBRWpCLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQUdwQztJQUtDLHdCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUovQixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksbUJBQVksRUFBVyxDQUFDO1FBQ3hDLFNBQUksR0FBRywrQkFBK0IsQ0FBQztJQUkvQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDUCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQzVCLElBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztZQUN6QixHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUcsQ0FBQztnQkFDeEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9B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QUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUNqRixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQTNERjtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBNERiLHFCQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNEWSxzQkFBYyxpQkEyRDFCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9SeCc7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuXHRtZXNzYWdlczogTWVzc2FnZVtdID0gW107XG5cdG1lc3NhZ2VJc0VkaXRhYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxNZXNzYWdlPigpO1xuXHRwcml2YXRlIF91cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcblxuXHR9XG5cblx0Z2V0TWVzc2FnZXMoKXtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKVxuXHRcdFx0Lm1hcChyZXMgPT4ge1xuXHRcdFx0XHRjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XG5cdFx0XHRcdGNvbnN0IHJlc0FycjogYW55W10gPSBbXTtcblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGRhdGFbaV0uY29udGVudCwgZGF0YVtpXS51c2VyLl9pZCwgZGF0YVtpXS5faWQsIGRhdGFbaV0udXNlci5maXJzdE5hbWUpO1xuXHRcdFx0XHRcdHJlc0Fyci5wdXNoKG1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXNBcnI7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVyciA9PiBPYnNlcnZhYmxlLnRocm93KGVyci5qc29uKCkpKTtcblx0fVxuXG5cdGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuXHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdC5tYXAocmVzID0+IHtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xuXHRcdFx0XHRsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGRhdGEuY29udGVudCwgZGF0YS51c2VyLl9pZCwgZGF0YS5faWQsIGRhdGEudXNlci5maXJzdE5hbWUgKTtcblx0XHRcdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVyciA9PiBPYnNlcnZhYmxlLnRocm93KGVyci5qc29uKCkpKTtcblx0fVxuXG5cdHVwZGF0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2godGhpcy5fdXJsICsgJy8nICsgbWVzc2FnZS5tZXNzYWdlSWQgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblx0fVxuXG5cdGVkaXRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2Upe1xuXHRcdHRoaXMubWVzc2FnZUlzRWRpdGFibGUuZW1pdChtZXNzYWdlKTtcblx0fVxuXG5cdGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuXHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UvJyArIG1lc3NhZ2UubWVzc2FnZUlkICsgdG9rZW4pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
