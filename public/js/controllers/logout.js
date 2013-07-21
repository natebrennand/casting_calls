define(['app', 'controllers/http'], function() {
  angular.module('casting').controller("Logout", ['$scope', '$http'], function($scope, $http) {
    return $scope.send = function() {
      var request;
      request = {
        method: "POST",
        url: "/logout"
      };
      $http(request).success(refresh).error(showError);
      return dialog.close();
    };
  });
});