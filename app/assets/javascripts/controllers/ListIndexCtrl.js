angular.module('Todo').controller('ListIndexCtrl', ['$scope', '$location', 'listsService', function ($scope, $location, listsService) {

  $scope.lists = [];

  $scope.showList = false;
  $scope.showMsg = false;

  $scope.determineListView = function(){
    if ($scope.lists.length > 0){
      $scope.showList = true;
    } else {
      $scope.showMsg = true;
    }
  };

  listsService.lists(function(data){
    $scope.lists = data;
    for (var i=0;i<$scope.lists.length;i+=1){
      $scope.lists[i].percentage = 0;
    }
    $scope.determineListView();
  });

  $scope.viewList = function(listId){
    $location.url('/list/'+listId)
  };

  $scope.createList = function(){
    $location.url('/list/new')
  };
  
  // Calculates completion percentage per list

  $scope.listCompletion = function(index){
    var checked = 0;
    var tasks = $scope.lists[index].tasks;
    for(var i=0;i<tasks.length;i+=1){
      if (tasks[i].checked === true){
        checked +=1;
      }
    }
    var percent = Number((checked/tasks.length)*100).toFixed(2);
    $scope.lists[index].percentage = percent;
    return Number((checked/tasks.length)*100).toFixed(2);
    
  };

  // Selects random color for list
  $scope.randomizeColor = function(numColors){
   
    return Math.floor(Math.random() * (numColors));
  };
  
  $scope.colors = ['aqua','red','blue','green','cyan','purple','pink'];

  $scope.randColor = function(){
    return $scope.colors[$scope.randomizeColor($scope.colors.length)];
  };
  
}]);