// 'use strict';

function Airport(){
  this._hanger = [];
}

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}
Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if (this._weather.isStormy())
  {
    throw new Error('Cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if (this._weather.isStormy())
  {
    throw new Error('Cannot take off during storm');
  }
  this._hangar.pop();
};
