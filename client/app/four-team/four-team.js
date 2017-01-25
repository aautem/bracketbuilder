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

  $scope.remove = function(index) {
    $scope.data.bracket.teams[index] = undefined;
  };

  $scope.advanceTeam = function(curIndex, nextIndex) {
    console.log('ADVANCING TEAM...');
    $scope.data.bracket.teams[nextIndex] = $scope.data.bracket.teams[curIndex];
  };

  $scope.addTeam = function(index) {
    $scope.data.bracket.teams[index] = prompt('Add a team!', 'team name');
    console.log('Teams in bracket:', $scope.data.bracket.teams);
  };

  $scope.saveBracket = function() {
    console.log('Updating database...');
    // UPDATE BRACKET
    Brackets.update($scope.data.bracket);
    alert('Bracket updated!');
  };
});