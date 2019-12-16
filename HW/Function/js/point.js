// Створити клас "Точка" (Point), який складається з двох полів типу int: X та Y. Необхідно забезпечити:
// Введення координат точки користувачем
// Вивід інформації про точку на екран
// Можливість зміни будь-якої з координат на запит користувача (X або Y)

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.ShowPoint = function() {
    console.log("x = ", this.x);
    console.log("y = ", this.y);
  };
  this.ChangePoint = function() {
    let p = prompt("Змінити x,y");
    if (p == "y") this.SetY();
    else if (p == "x") this.SetX();
  };
  this.SetX = function() {
    this.x = parseInt(prompt("x="));
    this.ShowPoint();
  };

  this.SetY = function() {
    this.y = parseInt(prompt("y="));
    this.ShowPoint();
  };
}
let firstPoint = new Point(parseInt(prompt("x=")), parseInt(prompt("y=")));
while (true) {}
firstPoint.ShowPoint();
firstPoint.ChangePoint();
