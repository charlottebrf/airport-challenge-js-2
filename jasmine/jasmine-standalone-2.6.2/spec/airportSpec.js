// it "Adds 'plane' to '@planes' when passed to 'land_plane'" do
//   plane = double(:plane)
//   subject.weather = :sunny
//   expect(subject.land_plane(plane)).to eq [plane]
// end

// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed


describe('Aiport', function() {

  var airport;
  beforeEach(function() {
    airport = new Airport();
  });

  describe('Lands a plane', function() {

    it('Stores a plane in planes array', function() {
      expect(airport.landsPlane(plane)).toEqual([plane]);
    });
  });
});
