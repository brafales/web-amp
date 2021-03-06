angular.module('webAmp.audio.nodes')
.factory('AudioNode', [
  '$rootScope', 'audioContext', 'ErrorLogger',
  function($scope, audioContext, errorLogger){

    errorLogger.hello();

    console.log("Registering the audio node service");
    // This is the abstract class for all audio nodes
    var AudioNode = function(){
      this.name = "NO NAME";
      this._connectedNode = null;
      this.selected = false;
    };

    AudioNode.prototype.connectedNode = function(newConnectedNode){
      if (angular.isDefined(newConnectedNode)){
        this._connectedNode = newConnectedNode;
        if (this._connectedNode === null){
          this.disconnect()
        }
        else{
          this.connect(this._connectedNode);
        }
        return null;
      }
      else{
        return this._connectedNode;
      }
    };

    AudioNode.prototype.value = function(newValue){
      if (angular.isDefined(newValue)){
        this.setTheValue(newValue);
      }
      else{
        return this.getTheValue();
      }
    };

    AudioNode.prototype.setTheValue = function(value){

    };

    AudioNode.prototype.getTheValue = function(value){

    };

    AudioNode.prototype.connect = function(audioNode){
      this._connectedNode = audioNode;
      this.node.connect(audioNode.getAudioNode());
    };

    AudioNode.prototype.disconnect = function(audioNode){
      this.node.disconnect();
    };

    AudioNode.prototype.getAudioNode = function(){
      return this.node;
    };

    AudioNode.prototype.isSelected = function(){
      return this.selected;
    };

    AudioNode.prototype.select = function(){
      this.selected = true;
    };

    return AudioNode;
  }
]);
