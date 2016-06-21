'use strict';

describe("Airport", function() {
	var airport;
	var plane;
	var weather;

	beforeEach(function() {
		plane =  jasmine.createSpy('plane');
		weather =  jasmine.createSpyObj('weather', ['isStormy']);
		airport = new Airport(weather);
	});

	it("has no planes", function () {
		expect(airport.planes()).toEqual([]);
	});

	describe("Under normal conditions", function(){

		beforeEach(function() {
			weather.isStormy.and.returnValue(false);
		});

		it("can clear planes for landing", function() {
			airport.clearForLanding(plane);
			expect(airport.planes()).toEqual([plane]);
		});

		it("can clear planes for take off", function() {
			airport.clearForLanding(plane);
			airport.clearForTakeOff(plane);
			expect(airport.planes()).toEqual([]);
		});

	});

	describe("Under stormy conditions", function(){
		beforeEach(function() {
			weather.isStormy.and.returnValue(true);
		});

		it("does not clear planes for take off", function(){
			expect(function(){
				airport.clearForTakeOff(plane);
			}).toThrowError("Can not take off during strom");
		});

		it("does not clear planes for land", function(){
			expect(function(){
				airport.clearForLanding(plane);
			}).toThrowError("Can not land during strom");
		});

	});

});

