angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'SoundBoardService', 'ErrorLogger',
  function($scope, SoundBoardService, errorLogger){


    errorLogger.hello();
    errorLogger.hello();
    errorLogger.hello();
    errorLogger.hello();

    $scope.audioNodes = SoundBoardService.audioNodes;

    SoundBoardService;

    $scope.createGainNode = function() {
      SoundBoardService.createGainNode();
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

