"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var account_component_1 = require("./components/account/account.component");
var credit_account_component_1 = require("./components/credit-account/credit-account.component");
var latest_statements_component_1 = require("./components/latest-statements/latest-statements.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component");
var deposits_component_1 = require("./pages/deposits/deposits.component");
var plans_component_1 = require("./pages/plans/plans.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                sidebar_component_1.SidebarComponent,
                account_component_1.AccountComponent,
                credit_account_component_1.CreditAccountComponent,
                latest_statements_component_1.LatestStatementsComponent,
                deposits_component_1.DepositsComponent,
                plans_component_1.PlansComponent,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                dashboard_routing_module_1.DashboardRoutingModule
            ],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
