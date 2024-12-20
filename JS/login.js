
let userName = document.querySelector("#user-name");
let pass = document.querySelector("#pass");
let sign = document.getElementById("sign");
let submit = document.getElementById("submit");
let signUp = document.querySelector(".sign-up");
let success = document.querySelector(".success");
let container = document.querySelector(".container");

// Module from main.js

// import {signButton} from "./main.js"

// Function to Log in
sign.onsubmit = function(event)
{ 
    event.preventDefault();
        if (submit.onclick = function () {})
        {
        if (userName.value === "" && pass.value === "" ){
            alert("اسم المستخدم و كلمة المرور فارغان")
            return false;
        } else  if (userName.value === "" || pass.value === "" ){
            alert("اسم المستخدم او كلمة المرور فارغ")
            return false;
        } else if((userName.value === localStorage.getItem("userName")) && (pass.value === localStorage.getItem("password")))
        {
            // signButton.style.display = "none"
            container.style.opacity = "0.5";
            success.style.display = "block";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else{
            alert("اسم المستخدم او كلمة المرور خطأ");
            pass.value = "";
            return false;
        }
    }
    }

    // Function to Open sign-up Page 
signUp.onclick = function()
{
    window.location.href = "/Html/signup.html"
}

// Function to Focus on the next Input when Press Enter Button
userName.addEventListener("keydown", (event) =>
{
    if(event.key === "Enter")
    {
        event.preventDefault();
        pass.focus();
    }
})

// Function to Focus on User Field
window.onload = function()
{
    userName.focus();
}

// Show the Password

let imgINdex = 0;
let images = ["https://cdn-icons-png.flaticon.com/512/5618/5618439.png","https://cdn-icons-png.flaticon.com/512/10898/10898993.png" ];
let show = document.getElementById("show");

show.onclick = function ()
{
    function toggleImage ()
    {
        imgINdex = (imgINdex + 1) % images.length;
        show.src = images[imgINdex];
        pass.type = (pass.type === "password")? "text" : "password";
    }
    toggleImage ();
}



