angular.module('Todo').controller('ListIndexCtrl', ['$scope', 'taskListsService', function ($scope, taskListsService) {

  $scope.lists = taskListsService.lists();
}]);