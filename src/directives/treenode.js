let app = angular.module('ui.treegrid');

app.directive('uiTreenode', ['treegridConfig', '$parse', (treegridConfig, $parse) => {

  
  let directive = {
    restrict: 'EA',
    scope: {
      data: '=ngModel'
    },
    transclude: true,
    template: () => `<div class="${treegridConfig.rowClass}" ng-click="visibleHandler($event)">
                       {{ data.title }}
                       <div ng-hide="collapse">
                         <ng-transclude></ng-transclude>
                       </div>
                     </div>`
    ,
    controller: ($scope) => {
    },
    link: (scope, element, attrs, ctrl) => {
      scope.collapse = false;
      scope.visibleHandler = (e) => {
        e.stopPropagation();
        scope.collapse = !scope.collapse;
      };
    }
  };
  
  return directive;
}]);