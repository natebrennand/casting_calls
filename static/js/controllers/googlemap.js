define(['app', 'services/maps'], function() {
  window.GoogleMap = function($scope, $location, Maps) {
    $scope.map       = false; // get a google map
    $scope.markers   = false; // array of markers
    $scope.address   = "";
    $scope.longitude = "";
    $scope.latitude  = "";

    $scope.getLongLat = function() {
      Maps.getLongLat($scope.address,callback);
    };

    $scope.getAddress = function() {
      Maps.getAddress($scope.longitude,$scope.latitude,callback);
    };

  };
});
