angular.module('bracketbuilder', [
  'bracket.services',
  'bracket.brackets',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/brackets', {
      templateUrl: 'app/brackets/brackets.html',
      controller: 'BracketsController'
    })
    .when('/mybracket' {
      templateUrl: 'app/four-team/four-team.html',
      controller: 'FourTeamController'
    })
    .otherwise(
      '/brackets'
    )
});