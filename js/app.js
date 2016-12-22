angular.module('reviewApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  })
  .state('characters', {
    url: '/characters',
    templateUrl: './views/characters.html',
    controller: 'charactersCtrl'
  })
  .state('vehicles', {
    url: '/vehicles',
    templateUrl: './views/vehicles.html',
    controller: 'vehiclesCtrl'
  })
})
