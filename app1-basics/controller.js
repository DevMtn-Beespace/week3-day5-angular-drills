angular.module('filterApp')
  .controller('FilterCtrl', function($scope, filterSvc){
    $scope.test = "test";
    $scope.testData = filterSvc.testData;
});
