"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var auth_interceptor_1 = require("./auth.interceptor");
describe('AuthInterceptor', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [
            auth_interceptor_1.AuthInterceptor
        ]
    }); });
    it('should be created', function () {
        var interceptor = testing_1.TestBed.inject(auth_interceptor_1.AuthInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
