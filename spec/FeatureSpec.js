describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe("Under normal conditions", function(){
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to take off', function(){
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    });
  });
  
  describe("Under normal conditions", function(){

    it('blocks take off when weather is stromy', function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function() { plane.takeOff(); }).toThrowError('Can not take off during strom');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when weather is stromy', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport) }).toThrowError('Can not land during strom');
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
