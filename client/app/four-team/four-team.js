angular.module('bracket.four', [])

.controller('FourTeamController', function($scope, Brackets) {
  $scope.data = {};

  $scope.getOne = function() {
    console.log('GATHERING BRACKETS...');

    // REPLACE THIS WITH VAR WINDOW.LOADEDBRACKET
    Brackets.getOne("NFL Playoffs")
      .then(function(bracket) {
        console.log('INCOMING BRACKET:', bracket);
        $scope.data.bracket = bracket;
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.getOne();
  console.log('FOUR TEAM CONTROLLER SCOPE DATA:', $scope.data);
});