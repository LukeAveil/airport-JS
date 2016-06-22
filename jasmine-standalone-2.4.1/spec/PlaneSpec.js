describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);

  });
  it('can land at an aiport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can takeoff at an aiport', function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });
});
