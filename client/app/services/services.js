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

  var getOne = function(name) {
    console.log('GRABBING BRACKET IN FACTORY...');

    return $http({
      method: 'GET',
      url: '/' + name
    })
    .then(function(res) {
      return res.data;
    })
  };

  var create = function(bracket) {
    console.log('CREATING BRACKET IN FACTORY...');

    return $http({
      method: 'POST',
      url: '/api/brackets',
      data: bracket
    })
    .then(function(res) {
      return res;
    });
  };

  var update = function(bracket) {
    console.log('UPDATING BRACKET IN FACTORY...');

    return $http({
      method: 'POST',
      url: '/api/update',
      data: bracket
    })
    .then(function(res) {
      return res;
    });
  };

  return {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update
  };

});