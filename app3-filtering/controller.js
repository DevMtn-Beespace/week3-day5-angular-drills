angular.module('filterApp')
.controller('filterCtrl', ['$scope', 'filterSvc', function($scope, filterSvc){
$scope.inputLabel = "Filter by input:";
$scope.data = filterSvc.data;
console.log($scope.data);

}]);
