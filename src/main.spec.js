'use strict';

describe('ui.treegrid', () => {

  var scope, $compile, element;
  var config;

  beforeEach(module('ui.treegrid'));

  beforeEach(inject(($rootScope, _$compile_, treegridConfig) => {
    $compile = _$compile_;
    config = treegridConfig;

    scope = $rootScope;
    scope.data = {
      title: 'root',
      nodes: [{
        title: 'first',
        nodes: []
      },
      {
        title: 'second has children',
        nodes: [
          {
            title: 'sub-1',
            nodes: []
          },
          {
            title: 'sub-2',
            nodes: []
          },
          {
            title: 'sub-3',
            nodes: []
          }
        ]
      },
      {
        title: 'third'
      }]
    };
    
    element = angular.element('<div ui-treegrid="options" ng-model="data"></div>');
        
  }));
  
  function createTree() {
    $compile(element)(scope);
    scope.$digest();
    return element;
  }
  
  describe('defiend', () => {
    it('should return defined treegridConfig.', () => expect(config).toBeDefined());
    
    it('should return a default class name of columnClass in treegridConfig.', 
      () => expect(config.columnClass).toEqual('treegrid-column'));    
  });
  
  describe('compiled', () => {
    it('should return all <li> elements', () => {
      var tree = createTree();
      expect(tree.children('li').children().eq(0).text()).toEqual('root');
      expect(tree.find('li').length).toEqual(6);
      expect(tree.find('ul').length).toEqual(2);
    })
    
  });  

});