angular.module('filterApp')
.controller('filterCtrl', ['$scope', 'filterSvc', function($scope, filterSvc){

$scope.data = filterSvc.data;
console.log($scope.data);

}]);
