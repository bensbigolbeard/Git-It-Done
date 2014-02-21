angular.module('Todo').factory('listsService', ['$http', function ($http) {

  return {
      lists: function (callback) {
          // return taskListData.data.lists;
          $http.get('/lists.json').success(callback);
      },
      getCurrentList: function (listId, callback) {
          // return taskListData.data.lists[listId]
          $http.get('/lists/'+listId+'.json').success(callback);

      }
  };
}]);


