angular.module('webAmp.audio.nodes')
.service('ErrorLogger', [
  function(){
    console.log("Error logger instantiated");
    this.timesCalled = 0;
    this.hello = function(){
      console.log("steve", this.timesCalled++);
    };
  }
]);
