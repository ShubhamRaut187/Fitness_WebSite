import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
let foot = document.getElementById("footer")
nav.innerHTML = navbar();
foot.innerHTML = footer();

let Club = JSON.parse(localStorage.getItem("SelectedClub"));
let City = Club.City;

let trainerdata = [];

let FilterTrainers = (data) =>{
    let FilteredData = data.filter((elem,index)=>{
        return elem.City === City
    })
    displaytrainers(FilteredData);
}

let StoreTrainer = (Trainer) => {
    localStorage.setItem('SelectedTrainer',JSON.stringify(Trainer));
    window.location = 'checkout.html'
}
let displaytrainers = (trainers) => {
    document.querySelector("#Trainer_Parent").textContent = "";
    trainers.map((elem,index)=>{
        let Trainercard = document.createElement("div");
        Trainercard.setAttribute("class","Trainer_Card");

        let TrainerImageDiv = document.createElement("div");
        TrainerImageDiv.setAttribute("class","Trainer_img_div");

        let TrainerImage = document.createElement("img");
        TrainerImage.setAttribute("src",elem.Image);
        TrainerImage.setAttribute("alt",elem.Name);
        TrainerImageDiv.append(TrainerImage);

        let TrainerInfoDiv = document.createElement("div");
        TrainerInfoDiv.setAttribute("class","Trainer_info_div");

        let TrainerName = document.createElement("h1");
        TrainerName.setAttribute("class","Trainer_Name");
        TrainerName.textContent = elem.Name;

        let TrainerGender = document.createElement("p");
        TrainerGender.setAttribute("class","Trainer_Gender");
        TrainerGender.textContent = "Gender: "+elem.Gender;

        let TrainerAge = document.createElement("p");
        TrainerAge.setAttribute("class","Trainer_Age");
        TrainerAge.textContent = "Age: "+elem.Age;

        let TrainerCity =  document.createElement("p");
        TrainerCity.setAttribute("class","Trainer_City");
        TrainerCity.textContent = "City: "+elem.City;

        let TrainerFee = document.createElement("p");
        TrainerFee.setAttribute("class","Trainer_Fee");
        TrainerFee.textContent = "Fees: "+elem.Fees;

        let SelectBtn = document.createElement("button");
        SelectBtn.setAttribute("class","Trainer_btn");
        SelectBtn.textContent = "Select Trainer"
        SelectBtn.addEventListener('click',()=>{
            StoreTrainer(elem);
        })

        TrainerInfoDiv.append(TrainerName,TrainerGender,TrainerAge,TrainerCity,TrainerFee,SelectBtn);
        Trainercard.append(TrainerImageDiv,TrainerInfoDiv);
        document.querySelector("#Trainer_Parent").append(Trainercard);
    })
}



let gettrainerdata = ()=>{
    fetch("https://fitnesswebsite-4mrg.onrender.com/Trainers").then((response)=>{
        return response.json();
    }).then((response)=>{
        trainerdata = response;
        FilterTrainers(trainerdata);
        // displaytrainers(trainerdata);
    }).catch((error)=>{
        console.log("Error While Fetching Trainer Data");
    })
}

gettrainerdata();