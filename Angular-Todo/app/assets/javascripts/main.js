
Todo = angular.module("Todo", ['ngRoute']);

Todo.config(['$routeProvider', function($routeProvider){
  // Route for '/list'
  $routeProvider
    // .when('/list/new', { templateUrl: '../assets/mainCreatePost.html', controller: 'CreatePostCtrl' } )
    .when('/list/:listId', { templateUrl: '../assets/listView.html', controller: 'ListCtrl' } );

  //  Default
  $routeProvider.otherwise({ templateUrl: '../assets/listIndex.html', controller: 'ListIndexCtrl' } );

}]);