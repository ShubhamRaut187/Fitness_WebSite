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
        localStorage.setItem("isLoggedin","yes");
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
        document.getElementById("login_Email").value="";
        document.getElementById("login_Password").value="";
    }).catch((error)=>{
        console.log(error);
    })

}
document.querySelector("form").addEventListener("submit",getUser);

//Nav
let gotoHome = ()=>{
    window.location="index.html";
}
let Home = document.getElementById("navbar_logo").addEventListener("click",gotoHome);

let gotoTrainWithUs = ()=>{
    window.location = "trainwithus.html";
}
let gotoFindclub = () => {
    window.location="findclub.html";
}
let gotoOwnafranchise = () =>{
    window.location="ownfranchise.html";
}
let gotoSignUp = ()=>{
    window.location = "signup.html";
}
let TrainWithUs = document.getElementById("trainwithus").addEventListener("click",gotoTrainWithUs);
let FindClub = document.getElementById("findclub_btn").addEventListener("click",gotoFindclub)
let OwnFranchise = document.getElementById("ownafranchise").addEventListener("click",gotoOwnafranchise);
let SignUp = document.getElementById("Sign-Up_btn").addEventListener("click",gotoSignUp);