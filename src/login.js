import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
let foot = document.getElementById("footer");
nav.innerHTML = navbar();
foot.innerHTML = footer();

//Main
let AuthenticateUser=(Users,Email,Password)=>{
    let req_passwd = "";
    let User = {};
    Users.map((elem,index)=>{
        if(elem.Email === Email){
            req_passwd = elem.Password;
            User = elem;
        }
    })
    if(req_passwd === ""){
        alert("Invalid Credentials")
    }
    else if(Password === req_passwd){
        alert("Login Successful");
        localStorage.setItem("User",JSON.stringify(User));
        localStorage.setItem('isLoggedin',"yes")
        localStorage.setItem('ButtonName',"LogOut")
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
let logout_op = () => {
    localStorage.setItem('isLoggedin',null);
    localStorage.setItem('User',null);
    localStorage.setItem('ButtonName','Sign-Up');
    location.reload();
}
let BtnToggle = localStorage.getItem("ButtonName");
let ButtonName = "";
let ButtonId = "";
let func = "";
if(BtnToggle === 'Sign-Up' || ButtonName === null){
    ButtonId = 'Sign-Up_btn';
    ButtonName = "Sign-Up";
    func = gotoSignUp;
}
else{
    ButtonId = 'logout_btn';
    ButtonName = 'LogOut'
    func = logout_op;
}
let SignUp = document.getElementById(ButtonId).addEventListener("click",func);
let TrainWithUs = document.getElementById("trainwithus").addEventListener("click",gotoTrainWithUs);
let FindClub = document.getElementById("findclub_btn").addEventListener("click",gotoFindclub)
let OwnFranchise = document.getElementById("ownafranchise").addEventListener("click",gotoOwnafranchise);
// let SignUp = document.getElementById("Sign-Up_btn").addEventListener("click",gotoSignUp);