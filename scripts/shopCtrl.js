angular.module('myApp')
  .controller('shopCtrl', function($scope, mainService) {
    $scope.getData = mainService.products()
      .then(function(response) {
        console.warn(response.data.data[0]);
      });




    console.log(mainService.products());

  });
