"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var not_logged_guard_1 = require("./not-logged.guard");
describe('NotLoggedGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(not_logged_guard_1.NotLoggedGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
