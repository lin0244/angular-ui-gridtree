describe('RecursionHelper', () => {
  var $compile, parent, scope, link;
  
  angular.module('Tree', [])
    .directive('tree', (RecursionHelper) => ({
      restrict: 'E',
      scope: {
        family: '='
      },
      replace: true,
      template: '' +
        '<div class="tree">' +
        '  <p>{{family.name}}</p>' +
        '  <ul>' +
        '    <li ng-repeat="child in family.children">' +
        '      <tree family="child"></tree>' +
        '    </li>' +
        '  </ul>' +
        '</div>',
      compile: (element) => RecursionHelper.compile(element, link)
    }));
    
    beforeEach(module('RecursionHelper', 'Tree'));
    beforeEach(inject((_$compile_, $rootScope) => {
      $compile = _$compile_;
      scope = $rootScope.$new();
      scope.treeFamily = {
        name: "Parent",
        children: [
          { 
            name: "Child1",
            children: [
              {
                name: "Grandchild1",
                children: []
              }, 
              {
                name: "Grandchild2",
                children: []
              },
              {
                name: "Grandchild3",
                children: []
              }
            ]
          },
          {
            name: "Child2",
            children: []
          }
        ]
      }
    }));
    
    var compileTree = () => {
      parent = $compile('<tree family="treeFamily"></tree>')(scope);
      scope.$apply();
    }
    

   	it('should render the whole tree', function(){
  		compileTree();
      
	  	var children = parent.children('ul').children();
		  expect(children.length).toBe(2);
      
      var grandChildren = children.find('ul').eq(0).children();
  		expect(grandChildren.length).toBe(3);
  	});
    
    it('should call the pre and post linking functions, when passed as object in the link parameter', () => {
      link = {
        pre: jasmine.createSpy('pre'),
        post: jasmine.createSpy('post')
      };
      
      compileTree();
      expect(link.pre).toHaveBeenCalled();
      expect(link.post).toHaveBeenCalled();
    });
    
    it('should call the post linking funciton, when passed as function in the link parameter', () => {
      link = jasmine.createSpy('post');
      
      compileTree();
      expect(link).toHaveBeenCalled();
    });
});