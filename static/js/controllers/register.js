define(['app', 'controllers/http'], function() {
  window.RegisterModal = function($scope, $http, dialog) {
    $scope.cancel = function() {
      dialog.close();
    };
    $scope.send = function() {
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
      dialog.close();
    };
  };
  window.Register = function($scope, $dialog) {
    $scope.open = function() {
      var d;
      d = $dialog.dialog({
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: 'register',
        controller: 'RegisterModal'
      });
      d.open().then(function() {
        console.log("opened");
      });
    };
  };
});
