"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PageErrorModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_error_routing_module_1 = require("./page-error-routing.module");
var page_error_component_1 = require("./page-error.component");
var PageErrorModule = /** @class */ (function () {
    function PageErrorModule() {
    }
    PageErrorModule = __decorate([
        core_1.NgModule({
            declarations: [
                page_error_component_1.PageErrorComponent,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                page_error_routing_module_1.PageErrorRoutingModule
            ],
            exports: [
                page_error_component_1.PageErrorComponent
            ]
        })
    ], PageErrorModule);
    return PageErrorModule;
}());
exports.PageErrorModule = PageErrorModule;
