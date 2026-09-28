//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreateDate = new Date(2026,0,29);
let mycreateDate = new Date("2026-09-28");
// console.log(mycreateDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(mycreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDAte = new Date()
console.log(newDAte);
console.log(newDAte.getMonth()+1);
console.log(newDAte.getDay())

newDAte.toLocaleString('default',{
    weekday:"long",
    
})
console.log(newDAte)