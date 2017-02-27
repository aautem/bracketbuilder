angular.module('bracket.brackets', [])

.controller('BracketsController', function($scope, $window, Brackets) {

  $scope.data = {}; // Initialize data to empty object

  $scope.loadBracket = function(bracket) {
    console.log('Loading bracket & rerouting.');
    Brackets.setBracket(bracket);
    if (bracket.size === 4) {
      $window.location.href = '/#/four-team';
    }
    if (bracket.size === 8) {
      $window.location.href = '/#/eight-team';
    }
    if (bracket.size === 16) {
      $window.location.href = '/#/sixteen-team';
    }
    if (bracket.size === 32) {
      $window.location.href = '/#/thirty-two-team';
    }
    if (bracket.size === 64) {
      $window.location.href = '/#/sixty-four-team';
    }
  };

  let getAll = function() {
    console.log('Loading brackets.');
    Brackets.getAll()
    .then(function(brackets) {
      console.log(brackets);
      $scope.data.brackets = brackets;
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  Brackets.setBracket(null); // Reset loaded bracket

  getAll(); // Load all brackets from database

});