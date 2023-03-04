// let Person = {
//   name: "dilshad",
//   age:23,
//   display(){
//     console.log(this.name);
//   },
//   place:"kannnur",
// }

// console.log(Person.name);
// console.log(Person['age']);
// for(property in Person) console.log(Person[property]);
// Person.dob = '03-02-3002'
// Person.name = "abji"
// Person.display();
// console.log(Person.dob);
// Person.displayAge = function() {console.log(this.age);}
// Person.displayAge();

//object constructors
function Person(name,age,place){
  this.name = name;
  this.age= age;
  this.place = place;
  this.display = function (){
    console.log(`Name: ${this.name} Age: ${this.age}`);
  };
};

let sire = new Person('sire',44,'kanur');
sire.display();
let abhi = new Person('abjinav',20,'kannur');
abhi.display();


//date
let d = new Date('10 march 2020');
console.log(d.getDate());

// exception

try{
d.setDate();
console.log(d.getDate());
let a =0;
if(a===0) throw "user not found";
}catch(err){
  console.log(err);
}finally{
  console.log("'dont even know why i'm executed")
}