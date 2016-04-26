let app = angular.module('ui.treegrid');

app.directive('uiTreegrid', ['treegridConfig', (treegridConfig) => {
  
  let directive = {
    restrict: 'A',
    scope: true,
    controller: () => {},
    template: '<ol><li ng-repeat="item in data">{{item.caption}}</li></ol>',
    link: (scope, element, attrs, ctrl) => {
      
    }
  };
  
  return directive;
}]);