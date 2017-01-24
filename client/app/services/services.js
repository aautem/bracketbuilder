angular.module('bracket.services', [])

.factory('Brackets', function($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/brackets/'
    })
    .then(function(res) {
      return res.data;
    });
  };

  return {
    getAll: getAll
  };

});