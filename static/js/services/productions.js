define(['app', 'controllers/http'], function() {
  casting.factory('Productions', function($http) {
    return {
      create: function(callback) {
        return $http({
          method: "POST",
          url: "/production/create",
          data: data
        }).success(callback).error(showError);
      },
      edit: function(callback) {
        return $http({
          method: "PUT",
          url: "/production/edit",
          data: data
        }).success(callback).error(showError);
      },
      delete: function(callback) {
        return $http({
          method: "DELETE",
          url: "/production/delete",
          data: data
        }).success(callback).error(showError);
      }
    };
  });
});