angular.module('Todo').controller('ListCtrl', ['$scope', '$http', '$q', '$location', '$routeParams', 'listsService', function ($scope, $http, $q, $location, $routeParams, listsService) {
  
  $scope.listId = $routeParams.listId;

  $scope.currentList = [];
  listsService.getCurrentList($scope.listId, function(data){
      $scope.currentList = data;
  });

  $scope.addTask = function(task) {
    console.log('got to task create');
    task.list_id = $scope.currentList.id
    $http.post('/tasks.json', task)
      .then(function(response) {
        if (typeof response.data === 'object') {
          $scope.currentList.tasks.push(response.data);
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
    task.checked = true;
    console.log("checked", task.checked);
    $http.put('/tasks/'+task.id+'.json', task.checked)
      .then(function(response) {
        if (typeof response.data === 'object') {
          // $scope.currentList.tasks.push(response.data);
          console.log('task successfully updated')
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
