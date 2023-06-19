import nabar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
nav.innerHTML = nabar();
let foot = document.getElementById("footer")
foot.innerHTML = footer();

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



let sendEmail=()=>{
    event.preventDefault();
    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let ContactNumber = document.getElementById("ContactNumber").value;
    let City = document.getElementById("City").value;
    let Capital = document.getElementById("Capital").value;

    if(Name === "" || Email === "" || ContactNumber === "" || City === "" || Capital === ""){
        alert("Fill All Fields");
    }
    else{
        let params = {
            from_name:Name,
            email_id:Email,
            contact_no:ContactNumber,
            city:City,
            capital:Capital
        }
        emailjs.send("service_0r1u5pn","template_xkgi2l6",params).then((response)=>{
            alert("Thank You! Our Business Executive Will Contact You Soon");
            document.getElementById("Name").value="";
            document.getElementById("Email").value="";
            document.getElementById("ContactNumber").value="";
            document.getElementById("Capital").value="";
        })
    }
}


document.getElementById("franchise_form").addEventListener("submit",sendEmail)