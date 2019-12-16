// let Person = {
//   name: "Jason",
//   age: 26,

//   ShowPerson() {
//     console.log(Person.name);
//     console.log(Person.age);
//   },
//   SetName(name) {
//       if(typeof(name)=="string")
//       this.name=name;
//   }
// };
// Person.ShowPerson();
// Person.SetName("Tom");
// Person.ShowPerson();

let Person = [
  {
    name: "Jason",
    age: 26,

    ShowPerson() {
      console.log(this.name);
      console.log(this.age);
    },
    SetName(name) {
      if (typeof name == "string") this.name = name;
    }
  },
  {
    name: "Jesica",
    age: 20,
    ShowPerson() {
      console.log(this.name);
      console.log(this.age);
    },
    SetName(name) {
      if (typeof name == "string") this.name = name;
    }
  }
];
console.log(Plus(2, 6, 4));

// console.log(Person)

// const onePerson = Person.map(item => {
//   item.ShowPerson();
// });

function Plus(...params) {
  //function declaration
  //   console.log(params);
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    result += params[i];
  }
  return result;
}
// console.log(Object);
// console.log(Minus(8, 3)); //Error initialization
const Minus = function(a, b) {
  //function exspresion
  return a - b;
};
// console.log(Minus(8, 3));

const Multiple=(...params)=>{
     let result = 1;
     for (let i = 0; i < params.length; i++) {
       result *= params[i];
     }
     return result;
}
// console.log(Multiple(2,2,2,2))

const App=id=>console.log(id);
// App(32);


