define(['app', 'controllers/http'], function() {
  window.Register = function($scope, $location, Accounts) {

    $scope.name = ""
    $scope.email = ""
    $scope.password = ""
    $scope.passwordAgain = ""
    $scope.company = false;

    $scope.request = function() {

      Accounts.register(
        $scope.name,
        $scope.email,
        $scope.password,
        $scope.passwordAgain,
        $scope.company, refresh);
    };
});
