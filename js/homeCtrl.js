angular
    .module('nameApp')
    .controller('homeCtrl', ['$scope', function($scope){
       $scope.title="Home";
       $scope.items="homeCtrl";
    }]);