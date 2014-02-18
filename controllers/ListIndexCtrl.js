angular.module('Todo').controller('ListIndexCtrl', ['$scope', '$location', 'listsService', function ($scope, $location, taskListsService) {

  $scope.lists = taskListsService.lists();

  $scope.viewList = function(listId){
    $location.url('/list/'+listId)
  };
}]);