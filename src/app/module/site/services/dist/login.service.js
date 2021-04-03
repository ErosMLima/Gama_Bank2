"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var LoginService = /** @class */ (function () {
    function LoginService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.API_URL = environment_1.environment.API_URL;
    }
    LoginService.prototype.logIn = function (usuario) {
        var _this = this;
        // return this.http.post(this.API_URL + '/contatos/' + id, this.httpOptions);
        return this.http.post(this.API_URL + "/login", usuario)
            .pipe(operators_1.tap(function (response) {
            _this.authService.setUser(response.usuario);
            _this.authService.setToken(response.token);
        }));
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
