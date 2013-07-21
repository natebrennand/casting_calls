define(['app', 'controllers/http'], function() {
  window.LoginModal = function($scope, $http, dialog) {
    $scope.cancel = function() {
      dialog.close();
    };
    $scope.send = function() {
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
      dialog.close();
    };
  };
  window.Login = function($scope, $dialog) {
    $scope.open = function() {
      var d;
      d = $dialog.dialog({
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: 'login',
        controller: 'LoginModal'
      });
      d.open();
    };
  };
});
