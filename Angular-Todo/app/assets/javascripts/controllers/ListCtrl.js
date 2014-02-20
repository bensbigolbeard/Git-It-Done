angular.module('Todo').controller('ListCtrl', ['$scope', 'listsService', function ($scope, taskListsService) {
  
  $scope.currentList = taskListsService.getCurrentList();

  
}]);
