"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var auth_service_1 = require("./auth.service");
describe('AuthService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(auth_service_1.AuthService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
