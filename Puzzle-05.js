function repeatLeg(direction, steps) {
  var count = 0;
  while (count < steps) {
    direction();
    count = count + 1;
  }
}
repeatLeg (right, 2);
if (getColor()== "red"){
  up();
} else {
  down();
}
repeatLeg (right, 2);
if (getColor()== "red"){
  up();
} else {
  down();
}
repeatLeg (right, 2);    
if (getColor()== "red"){
  up();
} else {
  down();
}
repeatLeg (right, 3);
