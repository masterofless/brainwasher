// Declare app level module which depends on filters, and services
/*global angular, console*/
(function () {
    'use strict';
    var brainwasher = angular.module('brainwasher', []);
    brainwasher.controller('BrainController', function ($scope) {
        $scope.presentation = {title: "This is the presentation title",
            slides: new Array({title: 'First Dummy Slide'}, {title: 'Second Dummy Slide'}, {title: '3rd Slide'})};

        $scope.current = 0;

        $scope.slides = function() {
            return $scope.presentation.slides;
        }
        /* */
        $scope.slideTitle = function() {
            return $scope.presentation.slides[$scope.current].title;
        };

        /* */
        $scope.nextSlide = function() {
            if (! $scope.atEnd()) {
                $scope.current += 1;
            }
            return $scope.current;
        };

        /* */
        $scope.prevSlide = function() {
            if (! $scope.atBeginning()) {
                $scope.current -= 1;
            }
            return $scope.current;
        };

        /* */
        $scope.atBeginning = function() {
            return $scope.current <= 0;
        };

        /* */
        $scope.atEnd = function() {
            return $scope.current >= $scope.presentation.slides.length - 1;
        };
    });
}());
