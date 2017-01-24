angular.module('bracket.four', [])

.controller('FourTeamController', function($scope, Brackets) {
  $scope.data = {};

  $scope.getOne = function() {
    console.log('GATHERING BRACKETS...');

    Brackets.getOne(window.loadedBracket)
      .then(function(bracket) {
        console.log('INCOMING BRACKET:', bracket);
        $scope.data.bracket = bracket;
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.getOne();
  console.log('FOUR TEAM CONTROLLER SCOPE DATA:', $scope.data);

  $scope.advanceTeam = function(curIndex, nextIndex) {
    console.log('ADVANCING TEAM...');
    $scope.data.bracket.teams[nextIndex] = $scope.data.bracket.teams[curIndex];
  };
});