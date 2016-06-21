describe('Feature test', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
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
