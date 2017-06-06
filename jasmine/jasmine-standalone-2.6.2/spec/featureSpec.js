
describe('Airport feature test', function() {
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('Lands a plane', function() {

    it('Stores a plane in planes array', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
  });
});
