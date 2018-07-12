var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.login = function(){
        localStorage.setItem("name",document.getElementById("name").value);
        localStorage.setItem("pass",document.getElementById("pass").value);
        
        $state.go('home');
    };
  });