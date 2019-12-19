window.addEventListener("load", Init);
let select_first = document.createElement("select");
let select_second = document.createElement("select");
let inputMoney = document.createElement("input");
let label = document.createElement("label");
let rezBuy;
let rezSale;
inputMoney.addEventListener("change", Convert);
select_first.addEventListener("change", Convert);
select_first.addEventListener("change", FillSelect);
select_second.addEventListener("change", Convert);
function FillSelect() {
  let currency_second = Array.from(select_first.options)
    .filter(option => option.ccy != "BTC")
    .map(currency_second => "UAH");
  select_second.options = currency_second;
}
function Convert() {
  let money = inputMoney.value;
  let currency1 = select_first.value;
  let currency2 = select_second.value;
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
  rezBuy = (money * courseBuy).toFixed(2);
  rezSale = (money * courseSale).toFixed(2);
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
}
function Init() {
  let table = document.createElement("table");
  table.setAttribute("class", "table");
  row = document.createElement("tr");
  row.innerHTML =
    "<th>ID</th><th>User</th><th>Email</th><th>Phone</th><th>Message</th><th>Currency</th>";
  table.appendChild(row);
  converter = document.querySelector(".converter");
  converter.appendChild(select_first);

  label.setAttribute("style", "color: black;margin-left: 15px;");
  inputMoney.setAttribute("type", "number");
  inputMoney.setAttribute("style", "color: black;margin-left: 15px;");
  select_second.setAttribute("style", "color: black;margin-left: 15px;");

  converter.appendChild(inputMoney);
  // converter.appendChild(select_second);
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
  let currency = select_first.value;
  let formData = {
    userName: userName,
    email: email,
    userPhone: userPhone,
    SendMessage: SendMessage
  };
  table = document.querySelector(".table");
  row = document.createElement("tr");
  row.innerHTML = `<td>${table.rows.length}</td><td>${formData.userName}</td><td>${formData.email}</td><td>${formData.userPhone}</td><td>${formData.SendMessage}</td><td>${inputMoney.value} ${select_first.value}/${rezSale}UAH</td>`;
  table.appendChild(row);
}
