"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.setUser = function (user) {
        this.user = user;
        localStorage.setItem('usurario', JSON.stringify(user));
    };
    AuthService.prototype.getUser = function () {
        if (this.user) {
            return this.user;
        }
        var savedUser = localStorage.getItem('usuario');
        if (savedUser) {
            this.user = JSON.parse(savedUser);
            return this.user;
        }
        return null;
    };
    AuthService.prototype.setToken = function (token) {
        this.token = token;
        localStorage.setItem('token', token);
    };
    AuthService.prototype.getToken = function () {
        if (this.token) {
            return this.token;
        }
        var savedToken = localStorage.getItem('token');
        if (savedToken) {
            this.token = savedToken;
            return this.token;
        }
        return null;
    };
    AuthService.prototype.isLogged = function () {
        return this.getUser() && this.getToken() ? true : false;
        // if (this.getUser() && this.getToken()) {
        //   return true;
        // }
        // return false;
    };
    AuthService.prototype.getNewPassword = function () {
        return localStorage.getItem('senhaTemporaria');
    };
    AuthService.prototype.logOut = function () {
        this.user = null;
        this.token = null;
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
