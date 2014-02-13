// Declare app level module which depends on filters, and services
/*global angular, console*/
(function () {
    'use strict';
    var brainwasher = angular.module('brainwasher', []);
    brainwasher.controller('BrainController', function ($scope) {
        $scope.title = 'Teams Are Cool';
        $scope.current = 0;
        $scope.slides = new Array({title: 'First Dummy Slide'}, {title: 'Second Dummy Slide'}, {title: '3rd Slide'});
        $scope.slideTitle = $scope.slides[0].title;

        if ($scope.current == null || $scope.current < 0) {
            $scope.current = 0;
        }
        /* */
        $scope.startSlides = function() {
            $scope.current = 0;
            return $scope.changeToCurrent();
        };
        /* */
        $scope.changeToCurrent = function() {
            $scope.slideTitle = $scope.slides[$scope.current].title;
            return $scope.current;
        }
        /* */
        $scope.nextSlide = function() {
            if (! $scope.atEnd()) {
                $scope.current += 1;
            }
            return $scope.changeToCurrent();
        };
        /* */
        $scope.prevSlide = function() {
            if (! $scope.atBeginning()) {
                $scope.current -= 1;
            }
            return $scope.changeToCurrent();
        };
        /* */
        $scope.atBeginning = function() {
            return $scope.current == 0;
        };
        /* */
        $scope.atEnd = function() {
            return $scope.current >= $scope.slides.length - 1;
        };
    });
}());
