angular.module('Todo').controller('CreateListCtrl', ['$scope', '$location', '$http', '$q', '$routeParams', 'listsService', function ($scope, $location, $http, $q, $routeParams, listsService) {
  
  // var input = "<input type='text' placeholder='New Task Title' ng-model='newTask.title'>
  // <input type='text' placeholder='New Task Details' ng-model='newTask.details'>";

  $scope.inputs = [{id: 1}];

  $scope.addNewInput = function() {
    var newItemNo = $scope.inputs.length+1;
    $scope.inputs.push({'id': newItemNo});
  };

  $scope.showAddInput = function(input) {
    return input.id === $scope.inputs[$scope.inputs.length-1].id;
  };

  $scope.createList = function(newList, tasks){
    $http.post('/lists.json', newList)
      .then(function(response) {
          if (typeof response.data === 'object') {
            $scope.createTask(response.data, tasks)
          } else {
              // invalid response
              return $q.reject(response.data);
          }

      }, function(response) {
          // something went wrong
          return $q.reject(response.data);
    });
  };

  $scope.createTask = function (list, tasks) {
    for(var i=0;i<tasks.length;i+=1){
      tasks[i].list_id = list.id
      $http.post('/tasks.json', tasks[i])
        .then(function(response) {
          if (typeof response.data === 'object') {
            $scope.lists[list.id].push(response);
          } else {
            // invalid response
            return $q.reject(response.data);
          }

        }, function(response) {
          // something went wrong
          return $q.reject(response.data);
      });
    }
  };

  $scope.viewLists = function() {
    $location.url('/lists');
  };

  $scope.createList = function() {
    $location.url('/list/new');
  };

}]);
