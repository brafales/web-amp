angular.module('webAmp')
.service('UiService', [ '$rootScope', function($rootScope) {

  this.canvas = new fabric.Canvas('canvas');

  this.createUiForNode = function(node) {
    var c = new fabric.Circle({
      left: 0,
      top: 0,
      strokeWidth: 5,
      radius: 12,
      fill: '#fff',
      stroke: '#666'
    });
    c.hasControls = c.hasBorders = false;
    c.on('selected', function() {
      node.select();
      //TODO instead of using rootscope call the controller? Or some other service
      //that knows about the nodes and can manipulate them
      $rootScope.$apply()
      console.log("SELECTED");
      console.log(node);
    });
    this.canvas.add(c);
    return c;
  };
}]);
