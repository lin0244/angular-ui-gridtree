'use strict';

describe('main', function () {

    var scope, $compile, element;
    var gridtreeConfig;

    beforeEach(module('ui.gridtree'));

    beforeEach(inject(function ($rootScope, _$compile_, _gridtreeConfig_) {
        scope = $rootScope;
        $compile = _$compile_;
        gridtreeConfig = _gridtreeConfig_;
    }));

    it('should defined gridtreeConfig.', function () {
        return expect(gridtreeConfig).toBeDefined();
    });
});