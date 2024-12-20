let userNameUp = document.querySelector("#user-name-up");
let passUp = document.querySelector("#pass-up");
let checkedPassUp = document.querySelector("#checked-pass-up");
let submit = document.getElementById("submit");
let signUpForm = document.getElementById('signUpForm');
let success = document.querySelector(".success");
let container = document.querySelector(".container");

//Regular Expression

let regEx = /^(?!.*\s).*$/gi; // for USerName 
let regExp = /^(?!.*\s).*$/gi; // for Password

// Function to Check the UserName And Password
signUpForm.onsubmit = function(event)
{
    event.preventDefault();
    if (passUp.value === "" &&  checkedPassUp.value === "" ){
        alert("حقل كلمة السر فارغ")
        return false;
    } else if (checkedPassUp.value === passUp.value)
        {   
            localStorage.setItem("userName", userNameUp.value);
            localStorage.setItem("password", passUp.value);

            if ((regEx.test(localStorage.getItem("userName")) === true) && (regExp.test(localStorage.getItem("password")) === true))
            {
                console.log(true);
                container.style.opacity = "0.5";
                success.style.display = "block";
                setTimeout(() => {
                    location.href = "/Html/login.html";
                }, 2000);
            } else {
                alert ("اسم المستخدم او كلمة المرور تحتوي على فراغات");
                userNameUp.value = "";
                passUp.value = "";
                checkedPassUp.value = "";
                localStorage.setItem("userName", "");
                localStorage.setItem("password", "");
                return false;
            }} else {
                alert ("خطأ في الإدخال");
                userNameUp.value = "";
                passUp.value = "";
                checkedPassUp.value = "";
                localStorage.setItem("userName", "");
                localStorage.setItem("password", "");
                return false;
            }
        
};

// Function to Focus on the next Input when Press Enter Button
userNameUp.addEventListener("keydown", (event) =>
{
    if(event.key === "Enter")
    {
        event.preventDefault();
        passUp.focus();
    }
})

passUp.addEventListener("keydown", (event) =>
{
    if(event.key === "Enter")
    {
        event.preventDefault();
        checkedPassUp.focus();
    }
})

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
        passUp.type = (passUp.type === "password")? "text" : "password";
    }
    toggleImage ();
}

let showConfirm = document.getElementById("show-confirm");

showConfirm.onclick = function()
{
    function toggleImageConfirm ()
    {
        imgINdex = (imgINdex + 1) % images.length;
        showConfirm.src = images[imgINdex];
        checkedPassUp.type = (checkedPassUp.type === "password")? "text" : "password";
    }
    toggleImageConfirm ();

}


// Function to Focus on User Field
window.onload = function()
{
    userNameUp.focus();
}


