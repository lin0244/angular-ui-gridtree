
let app = angular.module('ui.treegrid');

class LinearToHierachy{

  constructor() {
    this.id = 10;
  }
    
  toHierachy(linear){
    return [];
  }  
}

app.factory('LinearToHierachy', () => new LinearToHierachy());
 