function Queso (direction) {
  while (getColor()!="red") {
    direction();
  }
}
Queso(down);
function Fromage (direction) {
  while (getColor()=="red") {
    right();
    right();
  }
}
function Kase (direction) {
  Fromage();
  Queso(up);
  Fromage();
  Queso(down);
}
Kase();
Kase();
right();
