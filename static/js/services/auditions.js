define(['app', 'controllers/http'], function() {
  casting.factory('Auditions', function($http) {
    return {
      create: function(callback) {
        return $http({
          method: "POST",
          url: "/audition/create",
          data: data
        }).success(callback).error(showError);
      },
      edit: function(callback) {
        return $http({
          method: "PUT",
          url: "/audition/edit",
          data: data
        }).success(callback).error(showError);
      },
      delete: function(callback) {
        return $http({
          method: "DELETE",
          url: "/audition/delete",
          data: data
        }).success(callback).error(showError);
      }
    };
  });
});