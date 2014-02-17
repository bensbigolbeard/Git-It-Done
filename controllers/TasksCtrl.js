angular.module('Todo').controller('TasksCtrl', ['$scope', 'taskListsService', function ($scope, taskListsService) {
  
  $scope.lists = taskListsService.lists();
  
}]);
