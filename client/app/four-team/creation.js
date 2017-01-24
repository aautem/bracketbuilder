angular.module('bracket.create', [])

.controller('CreationController', function($scope, Brackets) {
  $scope.data = {};
  $scope.data.bracket = {};
  $scope.data.bracket.name = '';
  $scope.data.bracket.teams = [];
  $scope.data.bracket.size = 4;

  console.log('CREATION CONTROLLER SCOPE DATA:', $scope.data);

  $scope.addTitle = function() {
    $scope.data.bracket.name = prompt('Name your bracket!', 'bracket name');
    console.log('New bracket name:', $scope.data.bracket.name);
  };

  $scope.addTeam = function(index) {
    $scope.data.bracket.teams[index] = prompt('Add a team!', 'team name');
    console.log('Teams in bracket:', $scope.data.bracket.teams);
  };

  $scope.advanceTeam = function(curIndex, nextIndex) {
    console.log('ADVANCING TEAM...');
    $scope.data.bracket.teams[nextIndex] = $scope.data.bracket.teams[curIndex];
  };

  $scope.saveBracket = function() {
    if ($scope.data.bracket.name === '') {
      alert('Bracket must have title!');
      return;
    } else {
      console.log('Saving bracket to database...');
      // POST REQUEST TO API
      Brackets.create($scope.data.bracket);
      alert('Bracket saved to database!');
    }
  };
});