import navbar from "../components/navbar.js";
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();
let foot = document.getElementById("footer");
foot.innerHTML=footer();
let clubsdata = [];

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


// Page Functions
let ShowClubDetails = (data)=>{
    localStorage.setItem("club_info",JSON.stringify(data));
    window.location = "clubdetails.html"
}


let displayClubs = (clubs)=>{
    document.querySelector("#clubs_parent").textContent="";
    clubs.map((elem,index)=>{
        let clubcard = document.createElement("div");
        clubcard.setAttribute("class","club_card");

        let clubimagediv = document.createElement("div");
        clubimagediv.setAttribute("class","clubcard_img_div");

        let clubimage = document.createElement("img");
        clubimage.setAttribute("src",elem.Image1);
        clubimage.setAttribute("alt",elem.Club);

        clubimagediv.append(clubimage);

        let clubdetailsdiv = document.createElement("div");
        clubdetailsdiv.setAttribute("class","clubcard_details_div");

        let clubname = document.createElement("h2");
        clubname.textContent = elem.Club;

        let membership = document.createElement("h3");
        membership.textContent = "Membership Starts From 1500/month";

        let details_btn = document.createElement("button");
        details_btn.textContent = "View Club Details"
        details_btn.addEventListener("click",()=>{
            ShowClubDetails(elem);
        })

        clubdetailsdiv.append(clubname,membership,details_btn);
        clubcard.append(clubimagediv,clubdetailsdiv);
        document.querySelector("#clubs_parent").append(clubcard);

    })
}
let getData =()=>{
    fetch("https://fitnesswebsite-4mrg.onrender.com/Clubs").then((response)=>{
        return response.json();
    }).then((response)=>{
        clubsdata = response;
        displayClubs(response);
    }).catch((error)=>{
        console.log(error);
    })
}
getData();

let handelfilter=()=>{
    let selectedcity = document.getElementById("city_options").value;
    // console.log(selectedcity);

    let filtered = clubsdata.filter((elem,index)=>{
        if(selectedcity===""){
            return true;
        }
        else{
            return elem.City === selectedcity;
        }
    })
    // console.log(filtered)
    displayClubs(filtered);
}
document.getElementById("city_options").addEventListener("change",handelfilter);