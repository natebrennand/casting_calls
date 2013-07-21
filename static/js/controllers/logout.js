define(['app', 'controllers/http'], function() {
  window.Logout = function($scope, Accounts) {
    $scope.request = function() {
      Accounts.logout(refresh);
    };
  };
});