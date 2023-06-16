import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
let foot = document.getElementById("footer");
nav.innerHTML = navbar();
foot.innerHTML = footer();

//Main
let AuthenticateUser=(Users,Email,Password)=>{
    let req_passwd = "";
    Users.map((elem,index)=>{
        if(elem.Email === Email){
            req_passwd = elem.Password;
        }
    })
    if(req_passwd === ""){
        alert("Invalid Credentials")
    }
    else if(Password === req_passwd){
        alert("Login Successful");
        window.location = "index.html"
    }
    else{
        alert("Invalid Credentials")
    }
}
let getUser=()=>{
    event.preventDefault();
    let Email = document.getElementById("login_Email").value;
    let Password = document.getElementById("login_Password").value;

    fetch("https://fitnesswebsite-4mrg.onrender.com/Users").then((response)=>{
        return response.json();
    }).then((response)=>{
        console.log(response);
        AuthenticateUser(response,Email,Password);
    }).catch((error)=>{
        console.log(error);
    })

}
document.querySelector("form").addEventListener("submit",getUser);