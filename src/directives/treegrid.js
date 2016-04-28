let app = angular.module('ui.treegrid');

app.directive('uiTreegrid', ['treegridConfig', 'RecursionHelper', (treegridConfig, RecursionHelper) => {
  
  let directive = {
    restrict: 'EA',
    scope: {
      data : '=ngModel'
    },
    controller: $scope => {
      if (!angular.isArray($scope.data)){
        $scope.data = {nodes:[$scope.data]};
      }
    },
    template: `<div class="treenode">
                 <ui-treerecur ng-model="data"></ui-treerecur>
               </div>`
  };
  
  return directive;
}]);