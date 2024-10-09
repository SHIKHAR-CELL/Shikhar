// "use strict";
// let a=12;
// let b=45;
// let c="Hello";
// let d=[1,2,3,4]
// let e={
//     name:"Arjun",
//     id:12,
// }
// let f=true;
// let x="12"/"6";
// let bol=true;
// let str=String(bol);
// console.log( str.charAt(1));

// let str="true";
// let num=Boolean(str);
// console.log( num);                                 

// function display(){
//    let  x=   confirm("Are you sure?");
//    alert("usr selects " + x);
// }
// 
// let a="12";
// let b=12.0;
// console.log(a===b)
function validate(){
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var p=document.getElementById("result");
    if(name=="admin" && password=="admin"){
        p.innerText="success";
    }
    else{
        p.innerText="failed";
    }
    return false;
}

