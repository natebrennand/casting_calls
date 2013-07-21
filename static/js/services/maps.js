define(['app', 'controllers/http'], function() {
  casting.factory('Maps', function($http) {
    return {
      getLongLat: function(address,callback) {
        return $http({
          method: "GET",
          url: "https://www.google.com", //google places api url with API key + ADDRESS
        }).success(callback).error(showError);
      },
      getAddress: function(longitude,latitude,callback) {
        return $http({
          method: "GET",
          url: "https://www.google.com", //google places api url with API key + ADDRESS
        }).success(callback).error(showError);
      }
    };
  });
});