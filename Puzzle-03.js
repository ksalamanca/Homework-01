function repeatLeg(direction, steps) {
  var count = 0;
  while (count < steps) {
    direction();
    count = count + 1;
  }
}
repeatLeg (down, 2);
getColor();
var color = getColor ();
repeatLeg (down, 3);
repeatLeg (right, 2);
setColor(color);
repeatLeg (right, 2);
up();
