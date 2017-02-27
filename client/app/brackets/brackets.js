angular.module('bracket.brackets', [])

.controller('BracketsController', function($scope, $window, Brackets) {

  Brackets.setBracket(null);

  let getAll = function() {
    console.log('/brackets');

    Brackets.getAll()
    .then(function(brackets) {
      console.log('Brackets:', brackets);
      $scope.data.brackets = brackets;
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.data = {};

  $scope.loadBracket = function(bracket) {
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

  getAll();

});