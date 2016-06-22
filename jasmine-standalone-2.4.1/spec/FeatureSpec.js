describe('Feature test', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
  });

  describe('fine weather', function(){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });

    describe('land', function(){
      it('should land the plane', function(){
        plane.land(airport);
          expect(airport.planes()).toContain(plane);
      });
    });

    describe('takeOff', function(){
      it('should take off the plane', function(){
        plane.land(airport);
        plane.takeOff(airport);
        expect(airport.planes()).not.toContain(plane);
      });
    });
  });

  describe('stormy weather', function(){

    it('should not land the plane when stormy', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport); }).toThrowError('Cannot land during storm');
    });

    it('should not take off the plane when stormy', function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { plane.takeOff(airport); }).toThrowError('Cannot take off during storm');
    });
  });

});
