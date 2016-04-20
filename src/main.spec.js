'use strict';

describe('main', () => {
    var scope, $compile, element;
    
    beforeEach(module('ui.gridtree'));
    
    beforeEach(inject(($rootScope, _$compile_) => {
        scope = $rootScope;
        $compile = _$compile_;
    }));
   
   it('should execute', () => expect(true).toEqual(true)); 
});