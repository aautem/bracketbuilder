angular.module('bracket.services', [])

.factory('Brackets', function($http) {

  var getAll = function() {
    console.log('RETURNING BRACKETS IN FACTORY...');

    return $http({
      method: 'GET',
      url: '/api/brackets'
    })
    .then(function(res) {
      return res.data;
    })
  };

  var create = function(bracket) {
    console.log('CREATING BRACKET IN FACTORY...')

    return $http({
      method: 'POST',
      url: '/api/brackets',
      data: bracket
    })
    .then(function(res) {
      return res;
    });
  };

  return {
    getAll: getAll,
    create: create
  };

});