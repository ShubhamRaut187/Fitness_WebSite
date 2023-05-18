// import Navbar from "./Components/navbar";
// console.log(Navbar);
// let navbar = document.getElementById("navbar");
// navbar.innerHTML = Navbar();

let SlideShow = ()=>{
    let images = [
        "https://www.fitnessfirst.net.in/try-us/img/Try-Us-Banner.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ac8765105077959.5fb685bdd629e.jpg",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-exercise-club-design-template-f3ff2f62fe7b52e79008c0176704b34b_screen.jpg?ts=1647247670",
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
let TrainWithUs = document.getElementById("trainwithus").addEventListener("click",gotoTrainWithUs);