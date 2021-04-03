"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, loginService, router) {
        this.fb = fb;
        this.authService = authService;
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm();
    };
    LoginComponent.prototype.loginForm = function () {
        this.login = this.fb.group({
            usuario: ['', forms_1.Validators.required],
            senha: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        if (!this.login.valid) {
            return;
        }
        this.logIn();
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.loginService.logIn(this.login.value)
            .pipe(operators_1.take(1))
            .subscribe(function (response) { return _this.onSucessLogin(); }, function (error) { return _this.onError(error); });
    };
    LoginComponent.prototype.onSucessLogin = function () {
        this.router.navigate(['/#/dashboard']);
    };
    LoginComponent.prototype.onError = function (error) {
        this.router.navigate(['/error']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
