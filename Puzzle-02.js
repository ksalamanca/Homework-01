function repeatUgh(direction, steps) {
  var count = 0;
  while (count < steps) {
    direction();
    count = count + 1;
  }
}
repeatUgh(down, 6);
repeatUgh (right, 3);
repeatUgh (up, 3);
repeatUgh (right, 2);
repeatUgh (down, 4);
