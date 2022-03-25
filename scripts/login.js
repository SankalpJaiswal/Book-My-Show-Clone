
let regUsers = JSON.parse(localStorage.getItem("signupData"));
// console.log(regUsers)

document.querySelector("#form").addEventListener("submit", formSubmit);

let form = document.querySelector("#form");

function formSubmit(event){
    event.preventDefault();

    let email = form.email.value;
    let password = form.password.value;

    // console.log(email,password)

    let flag = false;

    for(let i=0; i<regUsers.length; i++)
    {
        if(regUsers[i].email == email && regUsers[i].password == password)
        {
            flag = true;
        }
    }

    if(flag == true)
    {
        window.location = "index.html"
    }

    else
    {
        alert("Login Failed")
    }
}