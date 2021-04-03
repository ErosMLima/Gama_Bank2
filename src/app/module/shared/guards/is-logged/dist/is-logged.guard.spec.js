"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var is_logged_guard_1 = require("./is-logged.guard");
describe('IsLoggedGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(is_logged_guard_1.IsLoggedGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
