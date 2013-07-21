define(['app', 'controllers/http'], function() {
  casting.factory('Actors', function($http) {
    return {
      create: function(callback) {
        return $http({
          method: "POST",
          url: "/actor/create",
          data: data
        }).success(callback).error(showError);
      },
      edit: function(callback) {
        return $http({
          method: "PUT",
          url: "/actor/edit",
          data: data
        }).success(callback).error(showError);
      },
      delete: function(callback) {
        return $http({
          method: "DELETE",
          url: "/actor/delete",
          data: data
        }).success(callback).error(showError);
      }
    };
  });
});