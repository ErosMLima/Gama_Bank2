"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlanService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var PlanService = /** @class */ (function () {
    function PlanService(http, token) {
        this.http = http;
        this.token = token;
        this.API_URL = environment_1.environment.API_URL;
    }
    PlanService.prototype.getPlans = function () {
        var user = this.token.getUser();
        var headers = new http_1.HttpHeaders({
            Authorization: this.token.getToken()
        });
        var params = new http_1.HttpParams().set('login', user.login);
        var httpOptions = {
            headers: headers,
            params: params
        };
        return this.http.get(this.API_URL + "/lancamentos/planos-conta", httpOptions);
    };
    PlanService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PlanService);
    return PlanService;
}());
exports.PlanService = PlanService;
