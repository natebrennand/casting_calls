define(['app', 'controllers/http'], function() {
  casting.factory('Parts', function($http) {
    return {
      create: function(data, callback) {
        return $http({
          method: "POST",
          url: "/part/create",
          data: data
        }).success(callback).error(showError);
      },
      edit: function(callback) {
        return $http({
          method: "PUT",
          url: "/part/edit",
          data: data
        }).success(callback).error(showError);
      },
      delete: function(callback) {
        return $http({
          method: "DELETE",
          url: "/part/delete",
          data: data
        }).success(callback).error(showError);
      }
    };
  });
});