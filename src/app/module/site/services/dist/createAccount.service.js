"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAccountService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var CreateAccountService = /** @class */ (function () {
    function CreateAccountService(http) {
        this.http = http;
        this.API_URL = environment_1.environment.API_URL;
    }
    CreateAccountService.prototype.createAccount = function (user) {
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var httpOptions = {
            headers: headers
        };
        return this.http.post(this.API_URL + "/usuarios", user, httpOptions);
    };
    CreateAccountService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CreateAccountService);
    return CreateAccountService;
}());
exports.CreateAccountService = CreateAccountService;
// https://developer.atlassian.com/server/crowd/json-requests-and-responses/
