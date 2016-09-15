(function () {
  'use strict';
   var x = "hello";
  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope){
    $scope.name = "Hemant";
    $scope.sayHello = function () {
      return "Hello Hemant";
    };
  });
})();
