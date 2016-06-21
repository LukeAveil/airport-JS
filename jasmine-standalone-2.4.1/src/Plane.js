'use strict';

function Plane() {
this._location = '';
}
Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeOff = function(airport){
  airport.clearForTakeOff(this);
  this._location = '';
};
