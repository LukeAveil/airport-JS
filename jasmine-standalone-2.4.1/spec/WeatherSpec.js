describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('makes weather stormy', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toEqual(true);
  });

  it('makes weather sunny', function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toEqual(false);
  });
});
