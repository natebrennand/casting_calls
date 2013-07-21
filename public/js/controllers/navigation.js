define(['app', 'controllers/http', 'services/characters', 'ui-bootstrap'], function() {
  angular.module('casting').controller("Navigation", ['$scope', '$location', 'Characters'], function($scope, $location, Characters) {
    var display;
    $scope.reset = function() {
      $scope.data = {
        characters: [],
        authors: [],
        books: []
      };
      return $scope.results = {
        all: []
      };
    };
    $scope.start = function() {
      $scope.reset();
      return $scope.query = {
        all: "",
        characters: "",
        books: "",
        authors: ""
      };
    };
    $scope.close = function() {
      $scope.data.all = [];
      return $scope.data.characters = [];
    };
    $scope.choose = function(data, kind) {
      $scope.query.all = "";
      return $scope.data.characters = [];
    };
    display = function(data) {
      $scope.data.characters = data;
      if ($scope.query.all !== "") {
        return $scope.data.characters.push({
          name: $scope.query.all,
          kind: "character",
          newItem: true
        });
      }
    };
    $scope.search = function() {
      var queryName;
      if ($scope.query.all === "") {
        console.log("clearing");
        return $scope.results.all = [];
      } else {
        queryName = $scope.query.all.toLowerCase();
        return Characters.find(queryName, display);
      }
    };
    return $scope.start();
  });
});
