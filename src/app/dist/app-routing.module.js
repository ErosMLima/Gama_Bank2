"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var is_logged_guard_1 = require("./modules/shared/guards/is-logged/is-logged.guard");
var not_logged_guard_1 = require("./modules/shared/guards/not-logged/not-logged.guard");
var forgot_password_component_1 = require("./modules/site/forgot-password/forgot-password.component");
var request_new_password_component_1 = require("./modules/site/request-new-password/request-new-password.component");
var routes = [
    {
        path: '#',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/logged-area/logged-area.module'); }).then(function (m) { return m.LoggedAreaModule; }); },
        canActivate: [is_logged_guard_1.IsLoggedGuard]
    },
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/site/site.module'); }).then(function (m) { return m.SiteModule; }); }
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/site/login/login.module'); }).then(function (m) { return m.LoginModule; }); },
        canActivate: [not_logged_guard_1.NotLoggedGuard]
    },
    {
        path: 'forgot-password',
        component: forgot_password_component_1.ForgotPasswordComponent
    },
    {
        path: 'request-new-password',
        component: request_new_password_component_1.RequestNewPasswordComponent
    },
    {
        path: 'error',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/site/page-error/page-error.module'); }).then(function (m) { return m.PageErrorModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
