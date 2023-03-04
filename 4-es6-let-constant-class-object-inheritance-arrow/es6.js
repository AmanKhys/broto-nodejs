const obj = {};
obj.name = 'hell';
// obj = {}; //throws error reassignment to const not possible
let a = 2;
// let a = 22; //thorws declaration error
let b = 33;
b = 22;
var c = 22;
var c = 42; //doesn't throw an error

//////let vs var
function hello(){
  var i = 0;
  let hell = 122;
  if(i===0){
    let hell = 33; //let has block scope
    var hey =20;//var has function scope
    var i = 200;
  };
  console.log(hey);
  console.log(hell);
  console.log(i);
};
hello();


///////
const hey = [232,52,52];
//replace cheyyaan pattilla..but aa object le contents maattaan pattum
hey.push(23232);
hey;



//////
//default parameter

function hellloo(num1=0,num2=0){
  console.log(num1+num2);
}
hellloo();

/////////////
//   class
class Sample{
  sampleHello(){
    console.log('this is sample hello');
  }
}
class Hola extends Sample{
  constructor(num1,num2){
    super();
    this.num1 = num2;
    this.num2 = num1;
  }
  hello(){
    console.log('hello friends' + this.num1 + this.num2)
  }
}

let booooli = new Hola(22,31);
booooli.hello();

booooli.sampleHello();


////// arrow function

function add(a,b){
  return a+b;
}
console.log(add(10,20));

let add1 = (a,b) => a+b;//no need for return is brace are not used
add1(12,21);//=