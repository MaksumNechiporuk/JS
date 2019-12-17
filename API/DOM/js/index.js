// let elem = document.getElementsByTagName("li"); //document - це обєкт для роботи з DOM деревом
// console.log(elem);
// for (let i = 0; i < elem.length; i++) {
//   elem[i].innerHTML = `Element number ${i}`;
// }

// const elem = document.getElementById("root");
// elem.innerHTML = "<h2>Hello World</h2>";

// const elem = document.getElementsByClassName("root")[0];
// elem.removeAttribute("id");
// elem.setAttribute("class", "new--class");
// tagA = document.createElement("a");

// tagA.setAttribute("href", "#");
// tagA.innerHTML = "Click";
// elem.appendChild(tagA);

// const elements1 = ["Firstname", "Lastname", "Age"];
// const elements2 = ["Jill", "Smith", "50"];
// const elements3 = ["Eve", "Jackson", "94"];
// const elem = document.getElementById("root");
// table = document.createElement("table");
// row = document.createElement("tr");
// for (let i = 0; i < elements1.length; i++) {
//   th = document.createElement("th");
//   th.innerHTML = elements1[i];
//   row.appendChild(th);
// }
// table.appendChild(row);
// row = document.createElement("tr");
// for (let i = 0; i < elements2.length; i++) {
//   td = document.createElement("td");
//   td.innerHTML = elements2[i];
//   row.appendChild(td);
// }
// table.appendChild(row);
// row = document.createElement("tr");
// for (let i = 0; i < elements3.length; i++) {
//   td = document.createElement("td");
//   td.innerHTML = elements3[i];
//   row.appendChild(td);
// }
// table.appendChild(row);
// row = document.createElement("tr");
// elem.appendChild(table);

window.addEventListener("load", Init);
let select_first = document.createElement("select");
let inputMoney = document.createElement("input");
let label = document.createElement("label");
inputMoney.addEventListener("change", Convert);
select_first.addEventListener("change", Convert);
function Convert() {
  let money = inputMoney.value;
  let currency1 = select_first.value;
  let courseBuy = parseFloat(
    Array.from(data)
      .filter(option => option.ccy === currency1)
      .map(option => option.buy)
  );
  let courseSale = parseFloat(
    Array.from(data)
      .filter(option => option.ccy === currency1)
      .map(option => option.sale)
  );
  let rezBuy = money * courseBuy;
  let rezSale = money * courseSale;

  if (currency1 != "BTC")
    label.innerHTML =
      "Buy:  " +
      rezBuy +
      "  " +
      "UAH" +
      "/" +
      "Sale :  " +
      rezSale +
      "  " +
      "UAH";
  else
    label.innerHTML =
      "Buy:  " +
      rezBuy +
      "  " +
      "USD" +
      "/" +
      "Sale :  " +
      rezSale +
      "  " +
      "USD";

  // let money = document.querySelector(".userPhone").value;
}
function Init() {
  let table = document.createElement("table");
  table.setAttribute("class", "table");
  row = document.createElement("tr");
  row.innerHTML =
    "<th>ID</th><th>User</th><th>Email</th><th>Phone</th><th>Message</th>";
  table.appendChild(row);
  converter = document.querySelector(".converter");
  converter.appendChild(select_first);

  label.setAttribute("style", "color: black;margin-left: 15px;");
  inputMoney.setAttribute("type", "number");
  inputMoney.setAttribute("style", "color: black;margin-left: 15px;");
  converter.appendChild(inputMoney);
  converter.appendChild(label);
  contact.appendChild(table);
  let button = document.querySelector(".btnSend");
  button.addEventListener("click", GetData);
  Request();
}
let data = [{}];
function Request() {
  const URL =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
  xhr.onreadystatechange = function(aEvt) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        let money = document.querySelector(".money");
        money.setAttribute("style", "display:inline-block;");
        money.setAttribute("style", "margin-left: 900px;");
        table = document.createElement("table");
        table.setAttribute("width", "250px");
        for (let i = 0; i < 4; i++) {
          row = document.createElement("tr");
          select_first.options[i] = new Option(data[i].ccy, data[i].ccy);
          select_first.setAttribute("style", "color: black;");

          row.innerHTML = `<td>${data[i].ccy}</td><td>${data[i].base_ccy}</td><td>${data[i].buy}</td><td>${data[i].sale}</td>`;
          table.appendChild(row);
        }
        money.appendChild(table);
        console.log(data);
      } else {
        console.log("Error loading page\n");
      }
    }
  };
  xhr.send();
}
function GetData() {
  let userName = document.querySelector(".userName").value;
  let email = document.querySelector(".email").value;
  let userPhone = document.querySelector(".userPhone").value;
  let SendMessage = document.querySelector(".SendMessage").value;
  let formData = {
    userName: userName,
    email: email,
    userPhone: userPhone,
    SendMessage: SendMessage
  };
  table = document.querySelector(".table");
  row = document.createElement("tr");
  row.innerHTML = `<td>${table.rows.length}</td><td>${formData.userName}</td><td>${formData.email}</td><td>${formData.userPhone}</td><td>${formData.SendMessage}</td>`;
  table.appendChild(row);
}
