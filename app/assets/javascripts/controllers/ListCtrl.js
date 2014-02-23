angular.module('Todo').controller('ListCtrl', ['$scope', '$http', '$q', '$location', '$routeParams', 'listsService', function ($scope, $http, $q, $location, $routeParams, listsService) {
  

// Nav paths
  $scope.viewLists = function() {
    $location.url('/lists');
  };

  $scope.createList = function() {
    $location.url('/list/new');
  };


// Grab current list
  $scope.listId = $routeParams.listId;

  $scope.currentList = [];
  $scope.currentTasks = [];

  listsService.getCurrentList($scope.listId, function(data){
    $scope.currentList = data;
    $scope.currentTasks = data.tasks;
    $scope.listCompletion();
  });


// Calculate percent of list completion
  $scope.completionPercent = 0;

  $scope.listCompletion = function(){
    var checked = 0;
    for(var i=0;i<$scope.currentTasks.length;i+=1){
      if ($scope.currentTasks[i].checked === true){
        checked +=1;
      }
    }
    $scope.completionPercent = Number((checked/$scope.currentTasks.length)*100).toFixed(0);
  };


// Format goal date with Moment.js
  $scope.formattedDate = function(task){
    return moment(task.goal_date).format('ll');
  }

  
// List color randomizer
  $scope.randomizeColor = function(numColors){
   
    return Math.floor(Math.random() * (numColors));
  };
  
  $scope.colors = ['aqua','red','blue','green','cyan','purple','pink'];

  $scope.randColor = $scope.colors[$scope.randomizeColor($scope.colors.length)];


// Communicate with the server

// POST to add task
  $scope.addTask = function(task) {
    task.list_id = $scope.currentList.id
    $http.post('/tasks.json', task)
      .then(function(response) {
        if (typeof response.data === 'object') {
          $scope.currentList.tasks.push(response.data);
          $scope.listCompletion();
          $scope.input = '';
          console.log("task successfully created");
        } else {
          // invalid response
          return $q.reject(response.data);
        }

      }, function(response) {
        // something went wrong
        return $q.reject(response.data);
    });
  };


// PUT to check/uncheck task
  $scope.checkTask = function(task){
    task.checked = !task.checked;
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


// DELETE to remove a list
  $scope.deleteList = function(list){
    $http.delete("/lists/"+list.id+".json", list)
      .then(function(response) {
        if (typeof response.data === 'object') {
          // Call viewLists function to redirect to list index after deleltion
          
          $scope.viewLists();
        } else {
            // invalid response
            return $q.reject(response.data);
        }
      }, function(response) {
        // something went wrong
        return $q.reject(response.data);
      });
  }

}]);
