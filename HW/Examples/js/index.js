// 1. Написати програму яка пропонує ввести три оцінки з клавіатури(від 2 до 5) підраховує середній бал.Якщо середній бал від 2 до 2.5 виводить BAD, до 3.3 SO - SO, до 4.2 GOOD, 5.0 EXCELLENT. 
const arr=[];
for (let i = 0; i < 3; )
{
    let digit = parseInt(prompt("Enter your digit(from 2 to 5):"));
if(digit>=2&&digit<=5)
{
    i++;
    arr.push(digit);
}

}
document.writeln("Mark:");
let sum=0;
for(let i=0;i<3;i++)
{
    document.write(arr[i]," ");
    sum+=arr[i];
}
let avg = sum / 3;
document.writeln("AVG=",avg);

if (avg>=2&&avg<=2.5)
{
    document.writeln("BAD");
    
}
else if( avg <= 3.3)
{
    document.writeln("SO-SO");

}
else if (avg <= 4.2) {
    document.writeln("GOOD");

}
else if (avg === 5.0) {
    document.writeln("EXCELLENT");

}


// // 2. За вказаним номером планети від Сонця, вивести її ім’я та коротку характеристику(одним реченням).Порядок планет: Меркурій, Венера, Земля, Марс, Юпітер, Сатурн, Уран, Нептун, Плутон.Примітка! Планети являються перелічуваними константами. (switch)

const planet = ["Меркурій", "Венера", "Земля", "Марс", "Юпітер", "Сатурн", "Уран", "Нептун", "Плутон"];
let selectPlanet;
while(true) {
    selectPlanet= parseInt(prompt("Select planet(from 1 to 9):"));
    if (selectPlanet >= 1 && selectPlanet <= 9) {
       break;
    }

}
selectPlanet--;
switch(selectPlanet)
{
    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:

        document.writeln(planet[selectPlanet], " - це ", selectPlanet + 1," планета від Сонця\n"  )

        break;


}


// 3. Написати повноцінний калькулятор.Введення цифр та вибір математичної операції виконати в діалоговому стилі(запитати у користувача, вивести меню).У програмі передбачити уникнення помилок(ділення на нуль і т.д.).Фантазія та «дизайн» меню – ціниться та вітається!!!

let  digit1= parseInt(prompt("Введіть перше число:"));
let digit2 = parseInt(prompt("Введіть друге число:"));
let operations=["+","*","/","-"];
let operation = prompt("Виберіть операцію: +,*,-,/")

switch (operation){

    case '+':
document.writeln(digit1,"+",digit2,"=",digit1+digit2);
    break;

    case '-':
        document.writeln(digit1, "-", digit2, "=", digit1 - digit2);

        break;

    case '*':
        document.writeln(digit1, "*", digit2, "=", digit1 * digit2);

        break;

    case '/':
if(digit2!=0)
            document.writeln(digit1, "/", digit2, "=", digit1 / digit2);
else
{
while(true)
{
    digit2 = parseInt(prompt("Введіть число відмінне від 0:"));
    if (digit2 != 0)
    {
  
        document.writeln(digit1, "/", digit2, "=", digit1 / digit2);
break;
    }}

}
        break;
}






