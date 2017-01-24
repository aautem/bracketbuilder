angular.module('bracket.brackets', [])

.controller('BracketsController', function($scope, Brackets) {
  $scope.data = {};

  $scope.getAll = function() {
    console.log('GATHERING BRACKETS...');

    Brackets.getAll()
      .then(function(brackets) {
        console.log('INCOMING BRACKETS:', brackets);
        $scope.data.brackets = brackets;
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.getAll();
  console.log('BRACKETS CONTROLLER SCOPE DATA:', $scope.data);

  $scope.setLoadedBracket = function(name) {
    window.loadedBracket = name;
  };
})
.controller('CreationController', function($scope, Brackets) {
  $scope.data = {};
  console.log('CREATION CONTROLLER SCOPE DATA:', $scope.data);
});