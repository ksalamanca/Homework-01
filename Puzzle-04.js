function repeatLeg(direction, steps) {
  var count = 0;
  while (count < steps) {
    direction();
    count = count + 1;
  }
}
repeatLeg (down, 4);
right();
function Elbow() {
  getColor();
  var color = getColor ();
  down();
  setColor(color);
  right();
}
repeatLeg (Elbow, 1);
repeatLeg (right, 2);
up();
repeatLeg (Elbow, 1);
right();
