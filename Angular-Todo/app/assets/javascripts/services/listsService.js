angular.module('Todo').factory('listsService', function () {
  var taskListData = {
    data: {
      lists: [
        { 
          listName: "First List", 
          tasks: [
            {taskTitle: "Task 1", details: 'This is my first task and I need to complete it', isChecked: false}, {taskTitle: "Task 2", details: 'This is my second task and I need to complete it', isChecked: false}, {taskTitle: "Task 3", details: 'This is my third task and I need to complete it', isChecked: false}, {taskTitle: "Task 4", details: 'This is my fourth task and I need to complete it', isChecked: false}, {taskTitle: "Task 5", details: 'This is my fifth task and I need to complete it', isChecked: false}
          ]
        },
        { 
          listName: "Second List", 
          tasks: [
            {taskTitle: "Task 1", details: 'This is my first task and I need to complete it', isChecked: false}, {taskTitle: "Task 2", details: 'This is my second task and I need to complete it', isChecked: false}, {taskTitle: "Task 3", details: 'This is my third task and I need to complete it', isChecked: false}, {taskTitle: "Task 4", details: 'This is my fourth task and I need to complete it', isChecked: false}, {taskTitle: "Task 5", details: 'This is my fifth task and I need to complete it', isChecked: false}
          ]
        }
      ]
    }
  };

  return {
      lists: function () {
          return taskListData.data.lists;
      },
      getCurrentList: function (list_index) {
          return taskListData.data.lists[list_index]
      }
  };
});


