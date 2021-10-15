"use strict";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('email');
//console.log(urlParams.get('fname'));
let label = document.getElementsByTagName("label")[0];
label.innerHTML= urlParams.get('email')+" "+ urlParams.get("password");

   
 function edit(){
     window.location.href= 
     "submitForm.html" + window.location.search;
 }  

 function submit(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email =='manager@miu.edu' && password ==='manager')
        window.location.href="inventory.html";
    else
        window.location.href="main.html";
}
