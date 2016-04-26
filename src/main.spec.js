'use strict';

describe('main', () => {

  var scope, $compile, element;
  var gridtreeConfig;

  beforeEach(module('ui.gridtree'));

  beforeEach(inject(($rootScope, _$compile_, _gridtreeConfig_) => {
    scope = $rootScope;
    $compile = _$compile_;
    gridtreeConfig = _gridtreeConfig_;
  }));

  it('should defined gridtreeConfig.', () => expect(gridtreeConfig).toBeDefined());
  
  it('should return a default class name of columnClass in gridtreeConfig.', 
    () => expect(gridtreeConfig.columnClass).toEqual('gridtree-column'));

});