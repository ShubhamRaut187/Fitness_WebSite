import navbar from "../components/navbar.js";
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();
// let foot = document.getElementById("footer");
// foot.innerHTML=footer();

let SlideShow = ()=>{
    let images = [
        "https://www.fitnessfirst.net.in/try-us/img/Try-Us-Banner.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ac8765105077959.5fb685bdd629e.jpg",
        "https://img.freepik.com/premium-vector/powerful-3d-barbell-fitness-banner_317810-4503.jpg",
        "https://s3.envato.com/files/252307252/Preview%20images%20set/1.png",
    ]

    let image = document.createElement("img");
    image.setAttribute("class","slide_show_img")
    let index = 0;
    let slideshow = document.getElementById("home_slidShow");
    setInterval(()=>{
        image.setAttribute("src",images[index]);
        image.setAttribute("alt",index);
        slideshow.append(image);
        index++;
        if(index === images.length){
            index = 0;
        }
    },3000)
}
SlideShow();


//Navbar Functions.
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
// let LogOut = document.getElementById('logout_btn').addEventListener('click',logout_op);
let TrainWithUs = document.getElementById("trainwithus").addEventListener("click",gotoTrainWithUs);
let FindClub = document.getElementById("findclub_btn").addEventListener("click",gotoFindclub)
let OwnFranchise = document.getElementById("ownafranchise").addEventListener("click",gotoOwnafranchise);
