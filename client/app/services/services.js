angular.module('bracket.services', [])

.factory('Brackets', function($http, $rootScope, $location) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/brackets'
    })
    .then(function(res) {
      return res.data;
    })
  };

  var getOne = function(name) {
    return $http({
      method: 'GET',
      url: '/' + name
    })
    .then(function(res) {
      if (res.data.size === 8 && window.location.hash !== '#/eightteam') {
        // REDIRECT TO EIGHTTEAM BRACKET!
        console.log('REDIRECTING TO EIGHT TEAM LAYOUT...');
        $location.path('/eightteam');
      } else {
        return res.data;
      }
    })
  };

  var create = function(bracket) {
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