angular.module('Todo').factory('listsService', ['$http', function ($http) {
  // var taskListData = {
  //   data: {
  //     lists: [
  //       { 
  //         listName: "First List", 
  //         tasks: [
  //           {taskTitle: "Task 1", details: 'This is my first task and I need to complete it', isChecked: false}, {taskTitle: "Task 2", details: 'This is my second task and I need to complete it', isChecked: false}, {taskTitle: "Task 3", details: 'This is my third task and I need to complete it', isChecked: false}, {taskTitle: "Task 4", details: 'This is my fourth task and I need to complete it', isChecked: false}, {taskTitle: "Task 5", details: 'This is my fifth task and I need to complete it', isChecked: false}
  //         ],
  //         listId:1
  //       },
  //       { 
  //         listName: "Second List", 
  //         tasks: [
  //           {taskTitle: "Task 1", details: 'This is my first task and I need to complete it', isChecked: false}, {taskTitle: "Task 2", details: 'This is my second task and I need to complete it', isChecked: false}, {taskTitle: "Task 3", details: 'This is my third task and I need to complete it', isChecked: false}, {taskTitle: "Task 4", details: 'This is my fourth task and I need to complete it', isChecked: false}, {taskTitle: "Task 5", details: 'This is my fifth task and I need to complete it', isChecked: false}
  //         ],
  //         listId:2
  //       }
  //     ]
  //   }
  // };

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


