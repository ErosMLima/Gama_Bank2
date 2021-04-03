"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var header_dashboard_component_1 = require("./components/header-dashboard/header-dashboard.component");
var home_dashboard_component_1 = require("./components/home-dashboard/home-dashboard.component");
var deposits_component_1 = require("./pages/deposits/deposits.component");
var plans_component_1 = require("./pages/plans/plans.component");
var routes = [
    // {
    //   path: '', component: AccountComponent,
    // },
    {
        path: '', component: header_dashboard_component_1.HeaderDashboardComponent,
        children: [
            {
                path: 'home',
                component: home_dashboard_component_1.HomeDashboardComponent
            },
            {
                path: 'deposits',
                component: deposits_component_1.DepositsComponent
            },
            {
                path: 'plans',
                component: plans_component_1.PlansComponent
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
