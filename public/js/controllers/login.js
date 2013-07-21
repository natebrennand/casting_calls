define(['app', 'controllers/http'], function() {
  angular.module('casting').controller("LoginModal", ['$scope', '$http', 'dialog'], function($scope, $http, dialog) {
    $scope.cancel = function() {
      return dialog.close();
    };
    return $scope.send = function() {
      var request;
      request = {
        method: "POST",
        url: "/login",
        data: {
          email: $scope.email,
          password: $scope.password
        }
      };
      $http(request).success(refresh).error(showError);
      return dialog.close();
    };
  });
  angular.module('casting').controller("Login", ['$scope', '$dialog'], function($scope, $dialog) {
    return $scope.open = function() {
      var d;
      d = $dialog.dialog({
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: 'login',
        controller: 'LoginModal'
      });
      return d.open();
    };
  };
});
