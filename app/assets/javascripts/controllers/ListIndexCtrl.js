angular.module('Todo').controller('ListIndexCtrl', ['$scope', '$location', 'listsService', function ($scope, $location, listsService) {

  $scope.lists = [];
  listsService.lists(function(data){
      $scope.lists = data;
  });

  $scope.viewList = function(listId){
    $location.url('/list/'+listId)
  };
}]);