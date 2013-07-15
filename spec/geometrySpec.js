;
describe("A Point", function() {
  beforeEach(function() {
    p1 = new Point(0, 0);
    p2 = new Point(4, 4);
  });

  it("knows who is above it.", function() {
    expect(p1.isAbove(p2)).toBe(true);
    expect(p2.isAbove(p1)).toBe(false);
  });

  it("knows who is below it.", function() {
    expect(p2.isBelow(p1)).toBe(true);
    expect(p1.isBelow(p2)).toBe(false);
  });

  it("knows to the left of whom is it.", function() {
    expect(p1.isLeftOf(p2)).toBe(true);
    expect(p2.isLeftOf(p1)).toBe(false);
  });

  it("knows who to the right of whom is it.", function() {
    expect(p1.isRightOf(p2)).toBe(false);
    expect(p2.isRightOf(p1)).toBe(true);
  });
  
});

describe("A Rectangle", function() {
  beforeEach(function() {
    p1 = new Point(0, 0);
    p2 = new Point(4, 4);
    p3 = new Point(2, 2);
    p4 = new Point(5, 5);
    p5 = new Point(8, 8);

    r1 = new Rect(p1, p2);
    r2 = new Rect(p3, p4);
    r3 = new Rect(p4, p5);
    r4 = new Rect(new Point(4, 0), new Point(8, 4));
    r5 = new Rect(p1, new Point(4, 2));

    v1 = p1;
    v2 = new Point(4, 0);
    v3 = new Point(0, 4);
    v4 = new Point(4, 4);
  });

  it("knows its dimensions", function() {
    expect(r1.width).toBe(4);
    expect(r1.height).toBe(4);
    expect(r1.area).toBe(16);
  });

  it("knows which poitns are inside of it.", function() {
    expect(r1.pointInside(p3)).toBe(true);
    expect(r1.pointInside(p4)).toBe(false);
  });

  it("can figure it if it overlaps with another rectangle", function(){
    expect(r1.overlaps(r2)).toBe(true);
    expect(r1.overlaps(r3)).toBe(false);
  });

  it("knows its vertices", function() {
    expect(r1.upperLeftCorner).toEqual(v1);
    expect(r1.upperRightCorner).toEqual(v2);
    expect(r1.lowerLeftCorner).toEqual(v3);
    expect(r1.lowerRightCorner).toEqual(v4);
    expect(r1.vertices).toEqual([v1, v2, v3, v4]);
  });

  it("knows if its adjacent to another rectangle", function() {
    expect(r1.adjacent(r4)).toBe(true);
    expect(r1.adjacent(r2)).toBe(false);
    expect(r1.adjacent(r5)).toBe(false);
  });

  xit("can make new rectangles that are the union of another rectangle", 
     function() {
       expect(r1.union(r2).area).toBe(1);
     });
});
