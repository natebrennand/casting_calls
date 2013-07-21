define(['app', 'controllers/http'], function() {
  casting.factory('Companies', function($http) {
    return {
      create: function(callback) {
        return $http({
          method: "POST",
          url: "/company/create",
          data: data
        }).success(callback).error(showError);
      },
      edit: function(callback) {
        return $http({
          method: "PUT",
          url: "/company/edit",
          data: data
        }).success(callback).error(showError);
      },
      delete: function(callback) {
        return $http({
          method: "DELETE",
          url: "/company/delete",
          data: data
        }).success(callback).error(showError);
      }
    };
  });
});