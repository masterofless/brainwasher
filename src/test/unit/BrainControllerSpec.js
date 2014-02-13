'use strict';

describe('Brainwasher', function(){

    describe('Hello Javascript Andy', function(){
        it('true should be true and false should be false', function() {
            expect(true).toBe(true);
            expect(false).toBe(false);
        });
        it('arrays should be arrays', function() {
            expect(typeof []).toBe('object');
            expect(typeof Array).toBe('function');
            expect(typeof new Array()).toBe('object');
            expect(Array.isArray([])).toBe(true);
            expect(Array.isArray(new Array())).toBe(true);
        });
    });
     
    describe('BrainController', function(){
        beforeEach(module('brainwasher'));
        var ttl = "Andy's Perceived Learnings About Teams";
        it('should have a brain controller', inject(function($controller) {
            var scope = {
                title: ttl,
                current: 0,
                slides: new Array({title: 'First Dummy Slide'}, {title: 'Second Dummy Slide'}, {title: '3rd Slide'})
            }
            expect(typeof scope).toBe('object');
            var ctrl = $controller('BrainController', {$scope: scope});
            expect(typeof ctrl).toBe('object');
            expect(scope.title).toBe(ttl);
            expect(scope.slides.length).toBe(3);
            expect(scope.current).toBe(0);
            expect(scope.atBeginning()).toBe(true);
            expect(scope.atEnd()).toBe(false);
            expect(scope.nextSlide()).toBe(1);
            expect(scope.current).toBe(1);
            expect(scope.prevSlide()).toBe(0);
            scope.current = 2;
            expect(scope.atEnd()).toBe(true);
            expect(scope.nextSlide()).toBe(2);
            expect(scope.nextSlide()).toBe(2);
            scope.current = 0;
            expect(scope.prevSlide()).toBe(0);
            expect(scope.prevSlide()).toBe(0);
        }));
    });
});
