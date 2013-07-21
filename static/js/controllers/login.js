define(['app', 'controllers/http'], function() {
  window.Login = function($scope, $location, Accounts) {
    $scope.email = ""
    $scope.password = ""

    $scope.request = function() {
      Accounts.login($scope.email, $scope.password, refresh);
    };
});
