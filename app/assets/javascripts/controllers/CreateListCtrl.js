angular.module('Todo').controller('CreateListCtrl', ['$scope', '$location', '$http', '$q', '$routeParams', 'listsService', function ($scope, $location, $http, $q, $routeParams, listsService) {

  // Page loads with single task input
  $scope.inputs = [{input_id: 1}];

  // Add input on button click
  $scope.addNewInput = function() {
    var newInputId = $scope.inputs.length+1;
    $scope.inputs.push({'input_id': newInputId});
  };

  // Clear form after submit
  $scope.clearFormFields = function() {
    $scope.newList.title = '';
    $scope.newList.details = '';
    $scope.inputs = [{input_id: 1}];
  };

// Create new list via POST to server
  $scope.createNewList = function(list, tasks){
    if (tasks[0].title){
      $http.post('/lists.json', list)
        .then(function(response) {
          if (typeof response.data === 'object') {
            // Call createTask function with server response and tasks as arguments
            $scope.createTask(response.data, tasks)
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

// Loop through tasks to POST them to server after List is created
  $scope.createTask = function (list, tasks) {
    console.log('got to task create');
    for(var i=0;i<tasks.length;i+=1){
      tasks[i].list_id = list.id
      $http.post('/tasks.json', tasks[i])
        .then(function(response) {
          if (typeof response.data === 'object') {
            console.log(i);
          } else {
            // invalid response
            return $q.reject(response.data);
          }

        }, function(response) {
          // something went wrong
          return $q.reject(response.data);
      });
      if (i === tasks.length-1){
        $scope.clearFormFields(); 
      }
    }
  };
  
// Redirect links for nav
  $scope.viewLists = function(){
    $location.url('/lists');
  };

  $scope.createList = function() {
    $location.url('/list/new');
  };

// Selects random color for list
  $scope.randomizeColor = function(numColors){
   
    return Math.floor(Math.random() * (numColors));
  };
  
  $scope.colors = ['aqua','red','blue','green','cyan','purple','pink'];

  $scope.randColor = $scope.colors[$scope.randomizeColor($scope.colors.length)];

}]);
