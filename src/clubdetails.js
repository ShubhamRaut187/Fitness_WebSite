import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
let foot = document.getElementById("footer");
nav.innerHTML = navbar();
foot.innerHTML = footer();
let club_data = JSON.parse(localStorage.getItem("club_info"));
let plansarr = [];


let slideImage = ()=>{
    
    slides.forEach((elem,index)=>{
        elem.style.transform = `translateX(-${counter * 100}%)`;
    })
}

let gotoprevious = ()=>{
    counter--;
    slideImage();
}

let gotonext = () =>{
    counter++;
    slideImage();
}

let getPlans = () =>{
    fetch("https://fitnesswebsite-4mrg.onrender.com/Plans").then((response)=>{
        return response.json();
    }).then((response)=>{
        plansarr = response;
        displayPlans(plansarr);
    }).catch((error)=>{
        console.log(error);
    })
}
getPlans();
let displayClubDetails=(data)=>{
    
    //Image Slider Div
    let image_slider_div = document.createElement("div");
    image_slider_div.setAttribute("id","image_slider_main_div");

    //Images
    let image1 = document.createElement("img");
    image1.setAttribute("src",data.Image1)
    image1.setAttribute("alt",data.Club)
    image1.setAttribute("class","slide")

    let image2 = document.createElement("img");
    image2.setAttribute("src",data.Image2)
    image2.setAttribute("alt",data.Club)
    image2.setAttribute("class","slide")


    let image3 = document.createElement("img");
    image3.setAttribute("src",data.Image3)
    image3.setAttribute("alt",data.Club)
    image3.setAttribute("class","slide")
    
    let image4 = document.createElement("img");
    image4.setAttribute("src",data.Image4)
    image4.setAttribute("alt",data.Club)
    image4.setAttribute("class","slide")

    image_slider_div.append(image4,image3,image2,image1);


    let slider_btns = document.createElement("div");
    slider_btns.setAttribute("id","slider_btns");

    let previous_btn = document.createElement("button");
    previous_btn.textContent = "Previous Image"
    previous_btn.addEventListener("click",gotoprevious);

    let next_btn = document.createElement("button");
    next_btn.textContent = "Next Image"
    next_btn.addEventListener("click",gotonext);

    slider_btns.append(previous_btn,next_btn);

    //Info
    let club_info_div = document.createElement("div");
    club_info_div.setAttribute("id","club_info");

    let club_name = document.createElement("h1");
    club_name.textContent = data.Club;

    let Area_City = document.createElement("h3");
    Area_City.textContent = data.City;

    let Club_facility = document.createElement("h2");
    Club_facility.textContent = "Club Facilities";

    // let list = document.createElement("ul");

    // let li1 = document.createElement("li");
    // li1.textContent = "Yoga";
    // let li2 = document.createElement("li");
    // li2.textContent = "Steam Bath and SPA";
    // let li3 = document.createElement("li");
    // li3.textContent = "Zumba";
    // let li4 = document.createElement("li");
    // li4.textContent = "Kick Boxing";
    // let li5 = document.createElement("li");
    // li5.textContent = "Mixed Martial Arts";
    // let li6 = document.createElement("li");
    // li6.textContent = "Group Cycling";

    let facilities = document.createElement("p");
    facilities.setAttribute("class","facilities");
    facilities.textContent = "Yoga | Steam Bath | SPA | Zumba | Kick Boxing | MMA | Group Cycling";

    // list.append(li1,li2,li3,li4,li5,li6);

    let member_btn = document.createElement("button");
    member_btn.textContent = "Become a Member";

    club_info_div.append(club_name,Area_City,Club_facility,facilities,member_btn);

    document.querySelector("#clubdetails_parent").append(image_slider_div,slider_btns,club_info_div);


}

let displayPlans = (data)=>{
    console.log(data)
    data.map((elem)=>{
        let plan_card = document.createElement("div");
        plan_card.setAttribute("class","plan_card");
        
        let Plan = document.createElement("h2");
        Plan.textContent = elem.Plan;

        let info = document.createElement("p");
        info.textContent = elem.Duration+" | ₹"+elem.Price;

        let note = document.createElement("p");
        note.textContent = elem.Extra;

        let select_btn = document.createElement("button");
        select_btn.textContent = "Select Plan";

        plan_card.append(Plan,info,note,select_btn);
        document.querySelector("#plans").append(plan_card);
    })
}

displayClubDetails(club_data);
let slides = document.querySelectorAll(".slide");
// console.log(slides);
let counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
});