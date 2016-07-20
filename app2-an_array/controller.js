angular.module('arrayApp')
.controller('arrayController', ['$scope', 'arraySvc', function($scope, arraySvc){
// $scope.test = "my Test";
$scope.myArray = arraySvc.data;
// console.log(arraySvc.data);
console.log($scope.myArray);

}]);
