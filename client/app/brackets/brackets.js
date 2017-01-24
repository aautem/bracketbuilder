angular.module('bracket.brackets', [])

.controller('BracketsController', function($scope, Brackets) {
  $scope.data = {};

  $scope.getAll = function() {
    Brackets.getAll()
      .then(function(brackets) {
        $scope.data.brackets = brackets;
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.getAll();
});