angular.module('Todo').controller('ListIndexCtrl', ['$scope', '$location', 'listsService', function ($scope, $location, listsService) {

  $scope.lists = [];

  $scope.showView = false;

  $scope.determineListView = function(){
    if ($scope.lists.length > 0){
      $scope.showView = true;
    }
  };

  listsService.lists(function(data){
    $scope.lists = data;
    $scope.determineListView();
  });

  $scope.viewList = function(listId){
    $location.url('/list/'+listId)
  };

  $scope.createList = function(){
    $location.url('/list/new')
  };
  
}]);