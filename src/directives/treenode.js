let app = angular.module('ui.treegrid');

app.directive('uiTreenode', ['treegridConfig', '$parse', (treegridConfig, $parse) => {
  
  let title;
  
  let directive = {
    restrict: 'EA',
    scope: {
      data: '=ngModel'
    },
    transclude: true,
    template: (scope) => {
      return '<div>{{ data.title }}<div ng-hide="collapse" ng-transclude></div></div>';
    },
    link: (scope, element, attrs, ctrl) => {
      scope.collapse = false; // default
      element.on('click', e => {
        scope.collapse = !scope.collapse;
      });
    }
  };
  
  return directive;
}]);