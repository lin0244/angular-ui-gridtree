'use strict';

describe('ui.treegrid', () => {

  var scope, $compile, element;
  var config;

  beforeEach(module('ui.treegrid'));

  beforeEach(inject(($rootScope, _$compile_, treegridConfig) => {
    $compile = _$compile_;
    config = treegridConfig;

    scope = $rootScope;
    scope.data = [
      {
        caption: 'first',
        nodes: []
      },
      {
        caption: 'second has children',
        nodes: [
          {
            caption: 'sub-1',
            nodes: []
          },
          {
            caption: 'sub-2',
            nodes: []
          }
        ]
      }
    ];
    
    element = angular.element('<div ui-treegrid="options"></div>');
        
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
    it('should return two li element', () => {
      var tree = createTree();
      expect(tree.children('ol').children('li').length).toEqual(2);
    })
    
  });  

});