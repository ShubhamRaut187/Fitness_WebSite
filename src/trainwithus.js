import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
let foot = document.getElementById("footer");
nav.innerHTML = navbar();
foot.innerHTML = footer();

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