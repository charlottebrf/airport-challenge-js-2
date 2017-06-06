'use strict';

function Airport(){}
  this._hangar = []
Airport.prototype.planes = function(){ return []; };
Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};
