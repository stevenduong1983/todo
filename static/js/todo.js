var app=angular.module('toDo',[]);

app.controller('toDoController',function ($scope) {
    $scope.todoList=[{todoText:'Finish the app'}];
    $scope.todoAdd = function () {
        $scope.todoList.push({todoText:$scope.todoText});
        $scope.todoInput='';
    };
})
