var piece = {
  position: new Point(0, 0),
  update_position: function() {
    this.position.y += 1;
  },
  paint: function(ctx){
    ctx.fillStyle = "rgb(50, 50 200)";
    ctx.fillRect(10 * this.position.x,
                 10 * this.position.y,
                 50, 50);
  },
  move: function(direction){
    switch (direction) {
    case "Left":
      if (this.position.x > 0) {
        this.position.x -= 1;
      };
      break;
    case "Right":
      if (this.position.x < 100) { // Canvas max width
        this.position.x += 1;
      };
      break;
    case "Left Rotate":
      console.log("Too Lazy to Rotate");
      break;
    case "Right Rotate":
      console.log("Too Lazy to Rotate");
      break;
    case "Down":
      break;
    default:
      console.log("Wrong move command issued!");
      break;
    };
  }
};
