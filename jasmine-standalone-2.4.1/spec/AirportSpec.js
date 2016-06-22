 // 'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;
  
  beforeEach(function(){
    airport = new Airport(weather);
    plane = new Plane();
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('fine weather', function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('can clear planes for take off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });
});
