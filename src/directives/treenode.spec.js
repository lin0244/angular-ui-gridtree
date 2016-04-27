'use strict';

describe('ui.treegrid.treenode', () => {

  var scope, $compile, element;
  var config;
  var data = {
    title : "test_sample"
  }

  beforeEach(module('ui.treegrid'));

  beforeEach(inject(($rootScope, _$compile_) => {
    $compile = _$compile_;

    scope = $rootScope;
    scope.data = data;
    element = $compile('<ui-treenode ng-model="data"></div>')(scope);
    scope.$digest();
  }));
  
  
  describe('', () => {
    it('should return a given sample text', () => {
      expect(element.html()).toContain(data.title);
      
      var isolatedScope = element.isolateScope();
      expect(isolatedScope.collapse).toBeFalsy();
      
      element.triggerHandler('click');
      scope.$digest();
      
      expect(isolatedScope.collapse).toBeTruthy();

      element.triggerHandler('click');
      scope.$digest();
      
      expect(isolatedScope.collapse).toBeFalsy();
    });
  });
  
});