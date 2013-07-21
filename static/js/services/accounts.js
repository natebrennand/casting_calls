define(['app', 'controllers/http'], function() {
  casting.factory('Accounts', function($http) {
    return {
      create: function(callback) {
        return $http({
          method: "POST",
          url: "/account/create",
          data: data
        }).success(callback).error(showError);
      },
      edit: function(callback) {
        return $http({
          method: "PUT",
          url: "/account/edit",
          data: data
        }).success(callback).error(showError);
      },
      delete: function(callback) {
        return $http({
          method: "DELETE",
          url: "/account/delete"
        }).success(callback).error(showError);
      },
      login: function(email, password, callback) {
        return $http({
          method: "POST",
          url: "/login",
          data: {
            email    : email,
            password : password
          }
        }).success(callback).error(showError);
      },
      register: function(name, email, password, passwordAgain, callback) {
        return $http({
          method: "POST",
          url: "/register",
          data: {
            name          : name,
            email         : email,
            password      : password,
            passwordAgain : passwordAgain
          }
        }).success(callback).error(showError);
      },
      logout: function(callback) {
        return $http({
          method: "POST",
          url: "/logout"
        }).success(callback).error(showError);
      }
    };
  });
});