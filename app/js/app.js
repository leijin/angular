'use strict';

/* App Module */

var myapp = angular.module('myapp', ["ui.router", "ui.bootstrap"]);
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1");
      
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
          });
    });

myapp.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});