
Todo = angular.module("Todo", ['ngRoute']);

// Application Routing
// Todo.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//   //  Route for '/list'
//   $stateProvider
//     .state('listIndex', {
//         url: "/",
//         templateUrl: "./assets/templates/listIndex.html"//,
//           // controller: 'ListIndexCtrl'
//     })
//     .state('list', {
//         url: "/list/:list_id",
//         templateUrl: "templates/listView.html"//,
//        // controller: 'ListCtrl'
//     });
//     // .state('list.tasks', {
//     //     url: "/list/:list_id",
//     //     templateUrl: "templates/listView.tasks.html",
//     //     controller: ListCtrl
//     // })
//     // .when('/list/:listId', { templateUrl: 'templates/listView.html', controller: 'ListCtrl' } );

//   // Default
//   $urlRouterProvider.otherwise( '/');
// }]);

Todo.config(['$routeProvider', function($routeProvider){
  // Route for '/list'
  $routeProvider
    // .when('/list/new', { templateUrl: '../assets/mainCreatePost.html', controller: 'CreatePostCtrl' } )
    .when('/list/:listId', { templateUrl: '../assets/listView.html', controller: 'ListCtrl' } );

  //  Default
  $routeProvider.otherwise({ templateUrl: '../assets/listIndex.html', controller: 'ListIndexCtrl' } );

}]);