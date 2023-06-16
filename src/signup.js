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
let TrainWithUs = document.getElementById("trainwithus").addEventListener("click",gotoTrainWithUs);
let FindClub = document.getElementById("findclub_btn").addEventListener("click",gotoFindclub)
