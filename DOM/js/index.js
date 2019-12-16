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

let table = document.createElement("table");
table.setAttribute("class", "table");
row = document.createElement("tr");
row.innerHTML =
  "<th>ID</th><th>User</th><td>Email</th><th>Phone</th><th>Message</th>";

table.appendChild(row);
contact.appendChild(table);

let button = document.querySelector(".btnSend");

button.addEventListener("click", GetData);

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

  table = document.querySelector("table");
  row = document.createElement("tr");

  console.log(table.rows.length);
  row.innerHTML = `<td>${table.rows.length}</td><td>${formData.userName}</td><td>${formData.email}</td><td>${formData.userPhone}</td><td>${formData.SendMessage}</td>`;

  table.appendChild(row);
}
