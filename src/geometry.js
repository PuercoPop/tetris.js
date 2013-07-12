;
function Point(x, y) {
  return {
    _x: x,
    get x() {
      return this._x;
    },
    set x(v) {
      this._x = v;
    },
    _y: y,
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

    above: function(point) {
      if (this.y < point.y) {
        return true;
      } else {
        return false;
      }
    },
    below: function(point) {
      if (this.y > point.y) {
        return true;
      } else {
        return false;
      }
    },
    left: function(point) {
      if (this.x < point.x) {
        return true;
      } else {
        return false;
      }
    },
    right: function(point) {
      if (this.x > point.x) {
        return true;
      } else {
        return false;
      }
    }
  }
};

function Rect(point1, point2){
  return {
    _p1: point1,
    get upperLeftCorner() {
      return this._p1;
    },
    set upperLeftCorner(p) {
      this._p1 = p;
    },

    _p2: point2,
    get lowerRightCorner() {
      return this._p2;
    },
    set lowerRightCorner(p) {
      this._p2 = p;
    },

    pointInside: function(point){
      if (this.upperLeftCorner.above(point) &&
          this.upperLeftCorner.left(point) &&
          this.lowerRightCorner.below(point) &&
          this.lowerRightCorner.right(point)) {
        return true;
      } else {
        return false;
      }
    },
    rectCollide: function(rect){
    }
  }
};
