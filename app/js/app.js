'use strict';

/* App Module */

var myapp = angular.module('myapp', ["ui.router", "ui.bootstrap"]);
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/welcome");
      
      $stateProvider
        .state('route1', {
          url: "/route1",
          templateUrl: "partials/route1.html"
        })
        .state('route1.list', {
          url: "/list",
          templateUrl: "partials/route1.list.html",
          controller: function($scope){
            $scope.items = ["A", "List", "Of", "Items"];
          }
        })
        .state('route2', {
          url: "/route2",
          templateUrl: "partials/route2.html"
        })
        .state('route2.list', {
          url: "/list",
          templateUrl: "partials/route2.list.html",
          controller: function($scope){
            $scope.things = ["A", "Set", "Of", "Things"];
          }
        })
        .state('welcome', {
          url: "/welcome",
          templateUrl: "partials/welcome.html",
          css: "css/app.css"
        });
    });

myapp.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.slides.push({
    image: 'img/threesome.png',
    text: 'threesome'
  });
  $scope.slides.push({
    image: 'img/girls.png',
    text: 'girls'
  });
  $scope.slides.push({
    image: 'img/lineup.png',
    text: 'lineup'
  });
  $scope.slides.push({
    image: 'img/everyone.png',
    text: 'everyone'
  });
});

function Ctrl($scope)
{
    $scope.date = new Date();
}