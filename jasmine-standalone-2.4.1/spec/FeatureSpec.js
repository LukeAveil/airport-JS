describe('Feature test', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
  });
  describe('land', function(){
    it('should land the plane', function(){
      plane.land(airport);
        expect(airport.planes()).toContain(plane);
    });

    it('should not land the plane when stormy', function(){

      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport); }).toThrowError('Cannot land during storm');
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
