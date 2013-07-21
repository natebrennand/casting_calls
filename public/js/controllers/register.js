define(['app', 'controllers/http'], function() {
  angular.module('casting').controller("RegisterModal", ['$scope', '$http', 'dialog'], function($scope, $http, dialog) {
    $scope.cancel = function() {
      return dialog.close();
    };
    return $scope.send = function() {
      var request;
      request = {
        method: "POST",
        url: "/register",
        data: {
          name: $scope.name,
          email: $scope.email,
          password: $scope.password,
          passwordAgain: $scope.passwordAgain
        }
      };
      $http(request).success(refresh).error(showError);
      return dialog.close();
    };
  });
  angular.module('casting').controller("Register", ['$scope', '$dialog'], function($scope, $dialog) {
    return $scope.open = function() {
      var d;
      d = $dialog.dialog({
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: 'register',
        controller: 'RegisterModal'
      });
      return d.open().then(function() {
        return console.log("opened");
      });
    };
  });
});
