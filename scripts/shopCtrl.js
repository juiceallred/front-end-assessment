angular.module('myApp')
  .controller('shopCtrl', function($scope, mainService) {



    $scope.getData = function() {
      mainService.products()
        .then(function(response) {
          console.log(response);
          $scope.products = response.data;
        })
        .catch(function(err) {
          console.error(err);
        })
      }

      $scope.getData();



    // console.log(mainService.products());

  });
