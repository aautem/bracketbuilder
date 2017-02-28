angular.module('bracketbuilder', [
  'bracket.services',
  'bracket.brackets',
  'bracket.four',
  'bracket.eight',
  'bracket.sixteen',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/brackets', {
      templateUrl: 'app/brackets/brackets.html',
      controller: 'BracketsController'
    })
    .when('/four-team', {
      templateUrl: 'app/four-team/four-team.html',
      controller: 'FourTeamController'
    })
    .when('/eight-team', {
      templateUrl: 'app/eight-team/eight-team.html',
      controller: 'EightTeamController'
    })
    .when('/sixteen-team', {
      templateUrl: 'app/sixteen-team/sixteen-team.html',
      controller: 'SixteenTeamController'
    })
    .otherwise(
      '/brackets'
    )
});