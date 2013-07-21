define(['app', 'controllers/http'], function() {
  window.Logout = function($scope, $http) {
    $scope.send = function() {
      var request;
      request = {
        method: "POST",
        url: "/logout"
      };
      $http(request).success(refresh).error(showError);
      dialog.close();
    };
  };
});