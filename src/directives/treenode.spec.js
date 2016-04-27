'use strict';

describe('ui.treegrid.treenode', () => {

  var scope, $compile, element;
  var config;

  beforeEach(module('ui.treegrid'));

  beforeEach(inject(($rootScope, _$compile_) => {
    $compile = _$compile_;

    scope = $rootScope;
    scope.data = {
      title: "test_sample"
    }
    element = $compile('<ui-treenode ng-model="data"></div>')(scope);
    scope.$digest();
  }));
  
  
  describe('', () => {
    it('should return a given sample text', () => {
      expect(element.html()).toContain("test_sample");
      
      var isolatedScope = element.isolateScope()
      console.log(isolatedScope.collapse);
      console.log(element.find('div.ng-hide'));
    });
  });
  
});