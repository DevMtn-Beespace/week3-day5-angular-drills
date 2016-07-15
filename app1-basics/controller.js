angular.module('arrayApp')
  .controller('ArrayCtrl', function($scope, arraySvc){
    $scope.myArray = [1,2,3,4,5,6];
  });
