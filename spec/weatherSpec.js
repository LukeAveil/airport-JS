describe("Weather", function() {
	var weather

	beforeEach(function() {
		weather = new Weather();
	});

	it("it gives stormy - sometimes", function() {
		spyOn(Math, 'random').and.returnValue(1);
		expect(weather.isStormy()).toBeTruthy();
	});

	it("it gives doesn't give stormy - sometimes", function(){
		spyOn(Math, 'random').and.returnValue(0);
		expect(weather.isStormy()).toBeFalsy();
	})
});