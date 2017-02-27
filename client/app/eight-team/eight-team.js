angular.module('bracket.eight', [])

.controller('EightTeamController', function($scope, Brackets) {

  $scope.data = {}; // Initialize data to empty object

  $scope.remove = function(index) {
    console.log('Removing Team.')
    $scope.data.bracket.teams[index] = undefined;
  };

  $scope.advanceTeam = function(curIndex, nextIndex) {
    console.log('Advancing Team.');
    $scope.data.bracket.teams[nextIndex] = $scope.data.bracket.teams[curIndex];
  };

  $scope.saveBracket = function() {
    if ($scope.data.bracket.name === '') {
      alert('Bracket must have title.');
    } else {
      console.log('Saving bracket.');
      Brackets.create($scope.data.bracket)
      .then(function(bracket) {
        Brackets.setBracket(bracket);
        alert('Bracket saved.');
      });
    }
  };

  let bracket = Brackets.getBracket();

  // LOAD OR CREATE
  if (bracket && bracket.size === 8) {
    // Load Bracket
    $scope.data.bracket = bracket;
  } else {
    // Setup Blank Bracket
    $scope.data.bracket = {};
    $scope.data.bracket.name = '';
    $scope.data.bracket.teams = [];
    $scope.data.bracket.size = 8;
  }

});