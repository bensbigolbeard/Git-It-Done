angular.module('Todo').controller('ListCtrl', ['$scope', '$location', '$routeParams', 'listsService', function ($scope, $location, $routeParams, listsService) {
  
  $scope.listId = $routeParams.listId;

  $scope.currentList = listsService.getCurrentList($scope.listId-1);

  $scope.viewLists = function() {
    $location.url('/lists');
  };

}]);
