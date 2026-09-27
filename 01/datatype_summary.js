//primitive

// 7 type : string,number , boolean , null ,undefeined , symbol,bigint

const score = 100
const scroe = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId= Symbol('123')
// console.log(id == anotherId)
const bigint = 234567987654n
// Refernce (non primitive )

//array , objects , functions 
const heros = ["shaktiman","naagraj"]
let myObj ={
    name: "rishi",
    age: 22,
}

const myfunction=function(){
    console.log("hello world");
}
// console.log(typeof heros)


//+++++++++++++++++++++++
// Stack(primitive) , HEAP(non primimitve)

let myname ="rishi"
let another = myname
another = "this job is mine"
// console.log(myname);
// console.log(another);

let user = {
    email: "rishi@gmail.com",
    upi: "user@pt"
}


let usertwo = user

usertwo.email = "user@gmail.com"
// console.log(user)
// console.log(usertwo)