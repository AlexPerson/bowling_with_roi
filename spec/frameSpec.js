describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("by default", function() {

    it("has a frame score of 0", function() {
      expect(frame.score).toEqual(0);
    });
  });
});
