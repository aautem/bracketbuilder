angular.module('bracket.brackets', [])

.controller('BracketsController', function($scope, $window, Brackets) {
  $scope.data = {};

  $scope.getAll = function() {
    console.log('GATHERING BRACKETS...');

    Brackets.getAll()
      .then(function(brackets) {
        console.log('Brackets:', brackets);
        $scope.data.brackets = brackets;
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.getAll();

  $scope.setLoadedBracket = function(name) {
    window.loadedBracket = name;
    $window.location.href = '/#/mybracket';
  };
});