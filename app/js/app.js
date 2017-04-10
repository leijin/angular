'use strict';

/* App Module */

var myapp = angular.module('myapp', ["ui.router", "ui.bootstrap"]);
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/welcome");
      
      $stateProvider
        .state('about', {
          url: "/about",
          templateUrl: "partials/about.html"
        })
        .state('pastors', {
          url: "/pastors",
          templateUrl: "partials/pastors.html"
        })
        .state('belief', {
          url: "/belief",
          templateUrl: "partials/belief.html"
        })
        .state('agenda', {
          url: "/agenda",
          templateUrl: "partials/agenda.html"
        })
        .state('welcome', {
          url: "/welcome",
          templateUrl: "partials/welcome.html",
          css: "css/app.css"
        });
    });

myapp.controller('Carousel', function ($scope) {
  $scope.slideInterval = 5000;
  var slides = $scope.slides = [];
  $scope.slides.push({
    image: 'img/meeting.png',
    text: 'meeting'
  });
  $scope.slides.push({
    image: 'img/group1.png',
    text: 'group photo'
  });
  $scope.slides.push({
    image: 'img/group2.png',
    text: 'group photo'
  });
  $scope.slides.push({
    image: 'img/girls.png',
    text: 'girls'
  });
  $scope.slides.push({
    image: 'img/smile.png',
    text: 'smile'
  });
  $scope.slides.push({
    image: 'img/bro.png',
    text: 'bro'
  });
});

myapp.controller('Ctrl', function ($scope) {
    $scope.date = new Date();
  }
);