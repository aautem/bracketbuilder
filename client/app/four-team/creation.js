angular.module('bracket.create', [])

.controller('CreationController', function($scope, Brackets) {
  $scope.data = {};
  $scope.data.bracket = {};
  $scope.data.bracket.name = '';
  $scope.data.bracket.teams = [];
  $scope.data.bracket.size = 4;

  $scope.advanceTeam = function(curIndex, nextIndex) {
    console.log('ADVANCING TEAM...');
    $scope.data.bracket.teams[nextIndex] = $scope.data.bracket.teams[curIndex];
  };

  $scope.remove = function(index) {
    $scope.data.bracket.teams[index] = undefined;
  };

  $scope.saveBracket = function() {
    if ($scope.data.bracket.name === '') {
      alert('Bracket must have title.');
      return;
    } else {
      console.log('Saving bracket to database...');
      // POST REQUEST TO API
      Brackets.create($scope.data.bracket);
      alert('Bracket saved!');
    }
  };
});