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
    .otherwise(
      '/brackets'
    )
});