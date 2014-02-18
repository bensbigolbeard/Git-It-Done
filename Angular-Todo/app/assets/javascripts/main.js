//= require_self
//= require_tree ./controllers/main
//= require_tree ./filters/main
//= require_tree ./services/main
//= require_tree ./directives/main

Todo = angular.module("Todo", ['ui.router']);

// Application Routing
Todo.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //  Route for '/list'
  $stateProvider
    .state('listIndex', {
        url: "/",
        templateUrl: "templates/listIndex.html"//,
          // controller: 'ListIndexCtrl'
    })
    .state('list', {
        url: "/list/:list_id",
        templateUrl: "templates/listView.html"//,
       // controller: 'ListCtrl'
    });
    // .state('list.tasks', {
    //     url: "/list/:list_id",
    //     templateUrl: "templates/listView.tasks.html",
    //     controller: ListCtrl
    // })
    // .when('/list/:listId', { templateUrl: 'templates/listView.html', controller: 'ListCtrl' } );

  // Default
  $urlRouterProvider.otherwise( '/');
}]);
