angular.module('myApp')
  .controller('detailsCtrl', function($scope, mainService, $stateParams) {
   mainService.details($stateParams.id)
      .then(function(response) {
        $scope.prodDetail = response.data;
      });



  });
