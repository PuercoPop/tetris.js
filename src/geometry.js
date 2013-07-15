;
var Point = function(x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype = {

  get x() {
    return this._x;
  },
  set x(v) {
    this._x = v;
  },
  get y() {
    return this._y;
  },
  set y(v) {
    this._y = v;
  },

  getDistance: function(point) {
    var x = this.x - point.x;
    var y = this.y - point.y;
    return Math.sqrt(x * x + y * y);
  },

  isAbove: function(point) {
    if (this.y <= point.y) {
      return true;
    } else {
      return false;
    }
  },
  isBelow: function(point) {
    if (this.y >= point.y) {
      return true;
    } else {
      return false;
    }
  },
  isLeftOf: function(point) {
    if (this.x <= point.x) {
      return true;
    } else {
      return false;
    }
  },
  isRightOf: function(point) {
    if (this.x >= point.x) {
      return true;
    } else {
      return false;
    }
  }
};

var Rect = function(point1, point2){
  this.upperLeftCorner = point1;
  this.lowerRightCorner = point2;
};

Rect.prototype = {
  get upperLeftCorner() {
    return this._p1;
  },
  set upperLeftCorner(p) {
    this._p1 = p;
  },

  get lowerRightCorner() {
    return this._p2;
  },
  set lowerRightCorner(p) {
    this._p2 = p;
  },

  get upperRightCorner() {
    return new Point(this.lowerRightCorner.x,
                     this.upperLeftCorner.y);
  },
  get lowerLeftCorner() {
    return new Point(this.upperLeftCorner.x,
                     this.lowerRightCorner.y);
  },
  get vertices() {
    return [this.upperLeftCorner, this.upperRightCorner,
            this.lowerLeftCorner, this.lowerRightCorner];
  },


  pointInside: function(point) {
    if (this.upperLeftCorner.isAbove(point) &&
        this.upperLeftCorner.isLeftOf(point) &&
        this.lowerRightCorner.isBelow(point) &&
        this.lowerRightCorner.isRightOf(point)) {
      return true;
    } else {
      return false;
    }
  },
  pointsInside: function(pointArray) {
    var that = this;
    return _.every(pointArray, function(elem) {
      return that.pointInside(elem);
    })
  },
  overlaps: function(rect) {
    if (this.lowerRightCorner.isBelow(rect.upperLeftCorner) &&
        this.lowerRightCorner.isRightOf(rect.upperLeftCorner)) {
      return true;
    } else {
      return false;
    }
  },

  adjacent: function(rect) {
    var that = this;
    var matching_vertices = this.vertices.map(function(elem){
      if (oContains(rect.vertices, elem)) {
        return elem;
      } else {
        return undefined;
      };
    });
    matching_vertices = _.compact(matching_vertices);

    var not_matching_vertices = rect.vertices.map(function(elem){
      if (!oContains(that.vertices, elem)) {
        return elem;
      } else {
        return undefined;
      };
    });
    not_matching_vertices = _.compact(not_matching_vertices);

    if (matching_vertices.length === 2 &&
        !this.pointsInside(not_matching_vertices)) {
      return true;
    } else {
      return false;
    }
  },

  get height() {
    return Math.abs(this.upperLeftCorner.y - this.lowerRightCorner.y);
  },
  get width() {
    return Math.abs(this.upperLeftCorner.x - this.lowerRightCorner.x);
  },
  get area() {
    return this.height * this.width;
  },
};
