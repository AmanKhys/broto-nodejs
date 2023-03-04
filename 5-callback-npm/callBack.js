// let dt = new Date();
// console.log('hello');
// for(let i = 0;i<100;i++)
//   console.log("looop");
// console.log('end');
// let diff = new Date() - dt;
// console.log(diff);

function longTast(millSecTime){
  let dt = new Date();
  let i = 0;
  while((new Date - dt)<= millSecTime){
  
  }
console.log(i);
}

function showEnd(){
  console.log('End');
}

console.log('started')

setTimeout(showEnd,2000);
console.log('started')

setTimeout(showEnd,2000);
console.log('started')
setTimeout(showEnd,2000);

///////

let hello = (data) =>{
  console.log(`Data: ${data}`)
}

let hey = (callBack)=>{
  callBack('corssroads')
}

hey(hello);

////////
// modules

