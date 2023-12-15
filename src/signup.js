import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
let foot = document.getElementById("footer");
nav.innerHTML = navbar();
foot.innerHTML = footer();

let postData=()=>{
    event.preventDefault();
    let Name=document.getElementById("SignUp_Name").value;
    let Email = document.getElementById("SignUp_Email").value;
    let Number = document.getElementById("SignUp_Number").value;
    let Password = document.getElementById("SignUp_Password").value
    if(Name !== "" && Email !== "" && Number !== "" && Password !== ""){
        let user_data = {
            Name:Name,
            Email:Email,
            Contact:Number,
            Club:"",
            Plan:"",
            Password:Password
        }
        fetch("https://fitnesswebsite-4mrg.onrender.com/Users",{
            method:"POST",
            body:JSON.stringify(user_data),
            headers:{
                "Content-Type":"application/json"
            },
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response);
            alert("Account Created Successfully");
            document.getElementById("SignUp_Name").value="";
            document.getElementById("SignUp_Email").value="";
            document.getElementById("SignUp_Number").value="";
            document.getElementById("SignUp_Password").value=""
        }).catch((error)=>{
            console.log(error);
        })
    }
    else{
        alert("Please Fill All The Fields")
    }
}
document.querySelector("form").addEventListener("submit",postData);

// Navbar Functions
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