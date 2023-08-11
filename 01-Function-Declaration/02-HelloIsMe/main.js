let a = prompt('browser');
function sayHelloUser(){
    if(a === null || a.trim()=="")
    {
        alert("put your ID");
    }else{
    let user = a ;
    alert("Hello" + "  " + user);
}}
sayHelloUser();