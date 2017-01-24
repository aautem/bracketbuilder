angular.module('bracketbuilder', [
  'bracket.services',
  'bracket.brackets'
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