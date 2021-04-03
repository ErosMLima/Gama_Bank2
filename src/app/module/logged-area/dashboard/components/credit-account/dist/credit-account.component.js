"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreditAccountComponent = void 0;
var core_1 = require("@angular/core");
var CreditAccountComponent = /** @class */ (function () {
    function CreditAccountComponent() {
        this.currentBill = '120,88';
        this.availableLimit = '9.120,88';
    }
    CreditAccountComponent.prototype.ngOnInit = function () {
    };
    CreditAccountComponent = __decorate([
        core_1.Component({
            selector: 'app-credit-account',
            templateUrl: './credit-account.component.html',
            styleUrls: ['./credit-account.component.sass']
        })
    ], CreditAccountComponent);
    return CreditAccountComponent;
}());
exports.CreditAccountComponent = CreditAccountComponent;
