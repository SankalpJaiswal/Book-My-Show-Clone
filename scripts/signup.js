
document.querySelector("#form").addEventListener("submit",myform);

let signupArr = JSON.parse(localStorage.getItem("signupData")) || [];

function myform(event){
    event.preventDefault();

    let signupObj = {
        name: document.querySelector("#name").value,
        contact: document.querySelector("#contact").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }

    let name = signupObj.name;
    let contact = signupObj.contact;
    let email = signupObj.email;
    let password = signupObj.password;


    if (name == "" || contact == "" || email == "" || password == "")
    {
        alert("Fill all Fields")
        return
    } 
    else 
    {
        alert("Sign up Successfully")
        window.location = "login.html"
        signupArr.push(signupObj)
        console.log(signupArr)

        localStorage.setItem("signupData", JSON.stringify(signupArr));
        return
    }

    


}