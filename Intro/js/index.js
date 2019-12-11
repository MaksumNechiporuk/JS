// Відомо, що 1 дюйм дорівнює 2.54 см.Розробити програму, що переводить дюйми в сантиметри и навпаки. 
let inch = prompt("1.Inch conver to centimeter\n2.Centimeter conver to inch");
let variable = parseInt(prompt("Enter variable")); 
let rezult;
switch (inch) {
    case '1': rezult=variable*2.54;
        break;
    case '2': rezult = variable / 2.54;
        break;
    default: document.write("R.T.F.M.");
        break;
}

document.write(rezult);