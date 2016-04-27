let app = angular.module('ui.treegrid');

app.directive('uiTreerecur', ['treegridConfig', '$templateCache', '$compile', 'RecursionHelper',
  (treegridConfig, $templateCache, $compile, RecursionHelper) => {
  
  let templateHtml =
        '  <ul>' +
        '    <li ng-repeat="n in data.nodes">' +
        '      <ui-treenode ng-model="n">' +
        '        <ui-treerecur ng-model="n"></ui-treerecur>' +
        '      </ui-treenode>' +
        '    </li>' +
        '  </ul>';
  // let templateHtml = $templateCache.get('treerecur.html');
        
  let directive = {
    restrict: 'E',
    scope: {
      data: '=ngModel'
    },
    template: templateHtml,
    compile: (element, tAttrs) => {
      
      var contents = element.contents().remove();
      var compiledContents;
      
      return {
        post: (scope, element, attrs, ctrl) => {
          
          var children = scope.data && scope.data.nodes;
          if (angular.isArray(children) && children.length > 0) {
            if (!compiledContents) {
              compiledContents = $compile(contents);
            }
            compiledContents(scope, (clone) => element.append(clone));
          }          
        }
      };
    }
  };
  
  return directive;
}]);