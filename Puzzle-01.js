function repeatUgh(direction, steps) {
  var count = 0;
  while (count < steps) {
    direction();
    count = count + 1;
  }
}
repeatUgh(down, 7);
repeatUgh (right, 5);
repeatUgh (up, 2);
repeatUgh (right, 2);
