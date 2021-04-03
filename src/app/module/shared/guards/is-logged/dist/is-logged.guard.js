"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IsLoggedGuard = void 0;
var core_1 = require("@angular/core");
var IsLoggedGuard = /** @class */ (function () {
    function IsLoggedGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IsLoggedGuard.prototype.canActivate = function () {
        // const isLoggedIn = this.authService.isLogged();
        if (this.authService.isLogged()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    IsLoggedGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], IsLoggedGuard);
    return IsLoggedGuard;
}());
exports.IsLoggedGuard = IsLoggedGuard;
