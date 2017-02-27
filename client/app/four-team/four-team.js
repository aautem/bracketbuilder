angular.module('bracket.four', [])

.controller('FourTeamController', function($scope, $window, Brackets) {
  $scope.data = {};


  // CREATION.JS LOGIC
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
  ///////////////////////


  $scope.getOne = function() {
    console.log('GRABBING BRACKET...');

    Brackets.getOne(window.loadedBracket)
      .then(function(bracket) {
        console.log(bracket);
        $scope.data.bracket = bracket;
      })
      .catch(function(err) {
        console.error(err);
      });
  };

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


  // LOAD OR CREATE
  if (window.loadedBracket) {
    // Load Bracket
    $scope.getOne();
  } else {
    // Setup Blank Bracket
    $scope.data.bracket = {};
    $scope.data.bracket.name = '';
    $scope.data.bracket.teams = [];
    $scope.data.bracket.size = 4;
  }

});