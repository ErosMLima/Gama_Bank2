"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAccountFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var CreateAccountFormComponent = /** @class */ (function () {
    function CreateAccountFormComponent(fb, router, route, createAccountService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.createAccountService = createAccountService;
    }
    CreateAccountFormComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    CreateAccountFormComponent.prototype.initializeForm = function () {
        this.registerForm = this.fb.group({
            cpf: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            fullName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        });
    };
    CreateAccountFormComponent.prototype.createAccount = function () {
        var _this = this;
        this.isLoading = true;
        var user = {
            cpf: this.registerForm.value.cpf,
            nome: this.registerForm.value.fullName,
            login: this.registerForm.value.userName,
            senha: this.registerForm.value.password
        };
        this.createAccountService.createAccount(user)
            .pipe(operators_1.take(1), operators_1.finalize(function () { return _this.isLoading = false; }))
            .subscribe(function (response) { return _this.onSucessCreateAccount(); }, function (error) { return _this.onError(error); });
    };
    CreateAccountFormComponent.prototype.onSucessCreateAccount = function () {
        this.router.navigate(['login']);
    };
    CreateAccountFormComponent.prototype.showError = function (nomeControle) {
        if (this.registerForm.get(nomeControle)) {
            return false;
        }
        return this.registerForm.get(nomeControle).invalid && this.registerForm.get(nomeControle).touched;
    };
    CreateAccountFormComponent.prototype.onError = function (error) {
        console.log(error);
    };
    CreateAccountFormComponent.prototype.validateFormFields = function () {
        var _this = this;
        Object.keys(this.registerForm.controls)
            .forEach(function (field) {
            var control = _this.registerForm.get(field);
            control.markAllAsTouched();
        });
    };
    CreateAccountFormComponent.prototype.sendForm = function () {
        if (this.registerForm.invalid) {
            this.validateFormFields();
            return;
        }
        this.createAccount();
    };
    CreateAccountFormComponent = __decorate([
        core_1.Component({
            selector: 'app-create-account-form',
            templateUrl: './create-account-form.component.html',
            styleUrls: ['./create-account-form.component.sass']
        })
    ], CreateAccountFormComponent);
    return CreateAccountFormComponent;
}());
exports.CreateAccountFormComponent = CreateAccountFormComponent;
