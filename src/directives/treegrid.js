let app = angular.module('ui.treegrid');

app.directive('uiTreegrid', ['treegridConfig', 'RecursionHelper', (treegridConfig, RecursionHelper) => {
  
  let directive = {
    restrict: 'EA',
    scope: {
      data : '=ngModel'
    },
    template: () =>  
        '<div class="treenode">' +
        '  <ui-treenode ng-model="data"></ui-treenode>' +
        '  <ui-treerecur ng-model="data"></ui-treerecur>' +
        '</div>'
    //     ,
    // compile: (element) => RecursionHelper.compile(element, null)
  };
  
  return directive;
}]);