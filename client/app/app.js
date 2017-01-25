angular.module('bracketbuilder', [
  'bracket.services',
  'bracket.brackets',
  'bracket.four',
  'bracket.create',
  'bracket.eight',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/brackets', {
      templateUrl: 'app/brackets/brackets.html',
      controller: 'BracketsController'
    })
    .when('/mybracket', {
      templateUrl: 'app/four-team/four-team.html',
      controller: 'FourTeamController'
    })
    .when('/create', {
      templateUrl: 'app/four-team/four-team.html',
      controller: 'CreationController'
    })
    .when('/eightteam', {
      templateUrl: 'app/eight-team/eight-team.html',
      controller: 'EightTeamController'
    })
    .otherwise(
      '/brackets'
    )
});