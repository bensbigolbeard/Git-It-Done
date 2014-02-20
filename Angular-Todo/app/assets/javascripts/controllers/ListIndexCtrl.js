angular.module('Todo').controller('ListIndexCtrl', ['$scope', '$location', 'listsService', function ($scope, $location, listsService) {

  $scope.lists = listsService.lists();

  $scope.viewList = function(listId){
    $location.url('/list/'+listId)
  };
}]);