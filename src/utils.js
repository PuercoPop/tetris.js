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
    }
  }
};
