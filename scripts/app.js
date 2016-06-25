  angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../views/about.html'
      })
      .state('blog', {
        url:'/blog',
        templateUrl: '../views/blog.html'
      })
      .state('product-details', {
        url: '/product-details',
        templateUrl: '../views/product-details.html'
      })
      .state('shop', {
        url: '/shop',
        templateUrl: '../views/shop.html',
        controller: 'shopCtrl'
      })

      $urlRouterProvider
      .otherwise('/');


  });
