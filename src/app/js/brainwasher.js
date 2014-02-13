// Declare app level module which depends on filters, and services
/*global angular, console*/
(function () {
    'use strict';
    var brainwasher = angular.module('brainwasher', []);
    brainwasher.controller('BrainController', function ($scope) {
        if ($scope.current == null || $scope.current < 0) {
            $scope.current = 0;
        }
        $scope.atBeginning = function() {
            return $scope.current == 0;
        };
        $scope.atEnd = function() {
            return $scope.current >= $scope.slides.length - 1;
        };
        $scope.nextSlide = function() {
            if (! $scope.atEnd()) {
                $scope.current += 1;
            }
            return $scope.current;
        };
        $scope.prevSlide = function() {
            if (! $scope.atBeginning()) {
                $scope.current -= 1;
            }
            return $scope.current;
        };
    });
}());
