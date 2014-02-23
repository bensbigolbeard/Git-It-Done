angular.module('Todo').controller('ListIndexCtrl', ['$scope', '$http','$q','$location', 'listsService', function ($scope, $http, $q, $location, listsService) {


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

  $scope.deleteList = function(list){
    $http.delete("/lists/"+list.id+".json", list)
      .then(function(response) {
        if (typeof response.data === 'object') {
          // Grab index of list and remove it from client-side records
          
          var index = $scope.lists.indexOf(list);
          $scope.lists.splice(index, 1);
        } else {
            // invalid response
            return $q.reject(response.data);
        }
      }, function(response) {
        // something went wrong
        return $q.reject(response.data);
      });
  }

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
    var percent = Number((checked/tasks.length)*100).toFixed(0);
    $scope.lists[index].percentage = percent;
    return percent;
    
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