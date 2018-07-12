var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){
    $scope.todoName="";
    $scope.todoDesc="";
    $scope.todoList=[];
    $scope.todoChecked="false";
    $scope.open="false";
    
    $scope.addData=function()
    {
        // $scope.todo={};
        // $scope.todo.name='';
        // $scope.todo.desc='';
        $scope.todoList.push($scope.todo);
        $scope.todo={};

    }
    $scope.delete = function(index){
        
        $scope.todoList.splice(index,1);
        $scope.todoDesc="";
        if($scope.todoDesc==""){
        
        $scope.todoDesc="No Description";
      }
    }
    //   $scope.mouseOver=function(data)
    //   {
    //       $scope.data=data.desc;
    //   }
    //   $scope.mouseLeave=function()
    //   {
    //       $scope.data='';
    //   }
      $scope.showDesc =function(desc)
      {
          $scope.todoDesc=desc;
      }


    // $scope.dash = function(){
    //     document.getElementById("todoName").innerHTML = localStorage.getItem("name");
        
    //     //$state.go('home');
    // };
});
