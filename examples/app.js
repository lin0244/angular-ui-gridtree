var app = angular.module("app", ['ui.treegrid']);

app.controller('mainCtrl', ['$scope', function($scope) {
  var data = {
    title: 'root',
    nodes: [{
      title: 'first',
      nodes: []
    },
    {
      title: 'second has children',
      collapse: false,
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
  
  $scope.data = data;
  $scope.options = {
    
  } 
  
  $scope.visible = true;
  
   
}]);
