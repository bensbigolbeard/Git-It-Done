angular.module('Todo').controller('ListCtrl', ['$scope', '$http', '$q', '$location', '$routeParams', 'listsService', function ($scope, $http, $q, $location, $routeParams, listsService) {
  
  $scope.listId = $routeParams.listId;

  $scope.completionPercent = 0;

  $scope.listCompletion = function(){
    var checked = 0;
    for(var i=0;i<$scope.currentTasks.length;i+=1){
      if ($scope.currentTasks[i].checked === true){
        checked +=1;
      }
    }
    $scope.completionPercent = Number((checked/$scope.currentTasks.length)*100).toFixed(2);
  };

  $scope.currentList = [];
  $scope.currentTasks = [];

  listsService.getCurrentList($scope.listId, function(data){
    $scope.currentList = data;
    $scope.currentTasks = data.tasks;
    $scope.listCompletion();
  });

  $scope.addTask = function(task) {
    console.log('got to task create');
    task.list_id = $scope.currentList.id
    $http.post('/tasks.json', task)
      .then(function(response) {
        if (typeof response.data === 'object') {
          $scope.currentList.tasks.push(response.data);
          $scope.listCompletion();
          $scope.input = '';
        } else {
          // invalid response
          return $q.reject(response.data);
        }

      }, function(response) {
        // something went wrong
        return $q.reject(response.data);
    });
  };

  $scope.checkTask = function(task){
    console.log("checked", task.checked);
    task.checked = !task.checked;
    console.log("checked", task.checked);
    $http.put('/tasks/'+task.id+'.json', task)
      .then(function(response) {
        if (typeof response.data === 'object') {
          console.log('task successfully updated')
          $scope.listCompletion();
        } else {
          // invalid response
          return $q.reject(response.data);
        }

      }, function(response) {
        // something went wrong
        return $q.reject(response.data);
    });
  };

  $scope.viewLists = function() {
    $location.url('/lists');
  };

  $scope.createList = function() {
    $location.url('/list/new');
  };

}]);
