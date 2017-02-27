angular.module('bracket.services', [])

.factory('Brackets', function($http, $rootScope, $location) {

  let bracket = null;

  let getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/brackets'
    })
    .then(function(res) {
      return res.data;
    });
  };

  let create = function(bracket) {
    return $http({
      method: 'POST',
      url: '/api/brackets',
      data: bracket
    })
    .then(function(res) {
      console.log('Bracket Created:', res.data);
      return res.data;
    });
  };

  let deleteBracket = function(bracketID) {
    return $http({
      method: 'DELETE',
      url: '/api/brackets/' + bracketID
    })
    .then(function(res) {
      return res.data;
    });
  }

  let setBracket = function(bracketObj) {
    bracket = bracketObj;
  };

  let getBracket = function() {
    return bracket;
  };

  return {
    getAll: getAll,
    create: create,
    deleteBracket: deleteBracket,
    setBracket: setBracket,
    getBracket: getBracket
  };

});