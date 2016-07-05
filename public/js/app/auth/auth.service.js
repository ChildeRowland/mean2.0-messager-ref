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
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/user';
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this._url, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return Observable_1.Observable.throw(err.json()); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this._url + '/signin', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return Observable_1.Observable.throw(err.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFLakI7SUFHQyxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGdkIsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBSTVDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNoQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUVwRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDekQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNoQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUVwRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3JFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQztJQUMvQyxDQUFDO0lBaENGO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFpQ2Isa0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLG1CQUFXLGNBZ0N2QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblx0cHJpdmF0ZSBfdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyJztcblx0XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcblxuXHR9XG5cblx0c2lnbnVwKHVzZXI6IFVzZXIpIHtcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0LmNhdGNoKGVyciA9PiBPYnNlcnZhYmxlLnRocm93KGVyci5qc29uKCkpKTtcblx0fVxuXG5cdHNpZ25pbih1c2VyOiBVc2VyKSB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvc2lnbmluJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdC5jYXRjaChlcnIgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnIuanNvbigpKSk7XG5cdH1cblxuXHRsb2dvdXQoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdH1cblxuXHRpc0xvZ2dlZEluKCkge1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPT0gbnVsbDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
