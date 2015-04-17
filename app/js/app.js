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

/*
*  AngularJS Directive for Twitter's Embedded Timeline with support for custom CSS.
*  https://github.com/userapp-io/twitter-timeline-angularjs
*/

angular.module('twitter.timeline', [])
  .directive('twitterTimeline', [function() {
    return {
      restrict: 'A',
      scope: {
        cssUrl: "@",
        autoResize: "="
      },
      link: function (scope, element, attrs) {
        $('body').removeAttr('data-twttr-rendered');

        element
          .attr('id', 'twitter-feed')
          .attr("width", "100%" || attrs.width)
          .attr('data-chrome', 'noheader transparent')
          .attr('data-widget-id', attrs.twitterTimeline)
          .addClass('twitter-timeline');

        function render() {
          var body = $('.twitter-timeline').contents().find('body');

          if (scope.cssUrl) {
            body.append($('<link/>', { rel: 'stylesheet', href: scope.cssUrl, type: 'text/css' }));
          }

          function setHeight() {
            if (body.find('.stream').length == 0) {
              setTimeout(setHeight, 100);
            } else {
              body.find('.stream').addClass('stream-new').removeClass('stream').css('height', 'auto');
              $('.twitter-timeline').css('height', (body.height() + 20) + 'px');
            }
          }

          if (scope.autoResize) {
            setHeight();
          }
        }

        if (!$('#twitter-wjs').length) {
          $.getScript((/^http:/.test(document.location)?'http':'https') + '://platform.twitter.com/widgets.js', function() {
            render();
            $('.twitter-timeline').load(render);
              });
        }
      }
    };
  }]);