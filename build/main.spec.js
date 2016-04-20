'use strict';

describe('main', function () {
    var scope, $compile, element;

    beforeEach(module('ui.gridtree'));

    beforeEach(inject(function ($rootScope, _$compile_) {
        scope = $rootScope;
        $compile = _$compile_;
    }));

    it('should execute', function () {
        expect(true).toEqual(true);
    });
});