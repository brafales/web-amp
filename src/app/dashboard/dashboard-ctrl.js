angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'SoundBoardService', 'ErrorLogger', 'UiService',
  function($scope, SoundBoardService, errorLogger,UiService){


    errorLogger.hello();
    errorLogger.hello();
    errorLogger.hello();
    errorLogger.hello();

    $scope.audioNodes = SoundBoardService.audioNodes;

    SoundBoardService;

    $scope.createGainNode = function() {
      var node = SoundBoardService.createGainNode();
      UiService.createUiForNode(node);
    };

    $scope.createDelayNode = function() {
      SoundBoardService.createDelayNode();
    };

    $scope.createInputNode = function() {
      SoundBoardService.createInputNode();
    };

    $scope.createOutputNode = function() {
      SoundBoardService.createOutputNode();
    };

    $scope.availableConnections = function(audioNode) {
      return SoundBoardService.availableConnections(audioNode);
    }

  }
]);;

