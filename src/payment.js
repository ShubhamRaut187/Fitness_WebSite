debitDetails();
let debit=document.getElementById("debit");
debit.addEventListener("click",clicked1);
 var count = 0;
var count1 = 0;
function clicked1(){
    document.querySelector("#debit").style.backgroundColor = "whitesmoke";
    if(document.querySelector("#debit").style.backgroundColor == "whitesmoke"){
        document.querySelector("#credit").style.backgroundColor = "white";
        document.querySelector("#cod").style.backgroundColor = "white";
    }
     debitDetails();
}


let credit=document.getElementById("credit");
credit.addEventListener("click",clicked2);
function clicked2(){
    document.querySelector("#credit").style.backgroundColor = "whitesmoke";
    if(document.querySelector("#credit").style.backgroundColor == "whitesmoke"){
        document.querySelector("#debit").style.backgroundColor = "white";
        document.querySelector("#cod").style.backgroundColor = "white";
    }
    creditDetails();
}


let cod=document.getElementById("cod");
cod.addEventListener("click",clicked3);

function clicked3(){
    document.querySelector("#cod").style.backgroundColor = "whitesmoke";
    if(document.querySelector("#cod").style.backgroundColor == "whitesmoke"){
        document.querySelector("#credit").style.backgroundColor = "white";
        document.querySelector("#debit").style.backgroundColor = "white";
    }
    coddetails();
}



function debitDetails(){
    let amount=JSON.parse(localStorage.getItem("SelectedPlan"));
    let trainer = JSON.parse(localStorage.getItem("SelectedTrainer"));

    let totalamount = amount.Price + trainer.Fees

    var paymentMethodDiv = document.querySelector("#paymentMethodDiv");
    paymentMethodDiv.innerHTML="";
    count++;
    var methodName = document.createElement('h3');
    methodName.setAttribute('class','methodName');
    methodName.textContent = "Debit Card";
    
    var methodDiv = document.createElement('div');
    methodDiv.setAttribute('class','methodDiv');

    var cardNumberDiv = document.createElement('div');
    cardNumberDiv.setAttribute('class','cardNumberDiv');

    var cardNumber = document.createElement('input')
    cardNumber.setAttribute('class','cardNumber');
    cardNumber.setAttribute('type','text');
    cardNumber.setAttribute('placeholder','Enter card number');

    cardNumberDiv.append(cardNumber);
    var cardDiv2 = document.createElement('div');
    cardDiv2.setAttribute('class','cardDiv2');

    var cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('class','cardDateDiv');

    var cardMonth = document.createElement('input')
    cardMonth.setAttribute('class','cardMonth');
    cardMonth.setAttribute('type','text');
    cardMonth.setAttribute('placeholder','MM');

    var cardYear = document.createElement('input')
    cardYear.setAttribute('class','cardYear');
    cardYear.setAttribute('type','text');
    cardYear.setAttribute('placeholder','YY');

    var slash = document.createElement('span');
    slash.setAttribute('class','slash');
    slash.textContent = "/";

    cardDateDiv.append(cardMonth,slash,cardYear);
    var cardCvvDiv = document.createElement('div');
    cardCvvDiv.setAttribute('class','cardCvvDiv');

    var cardCvv = document.createElement('input')
    cardCvv.setAttribute('class','cardCvv');
    cardCvv.setAttribute('type','password');
    cardCvv.setAttribute('placeholder','CVV');

    cardCvvDiv.append(cardCvv);

    cardDiv2.append(cardDateDiv,cardCvvDiv);
    var cardNameDiv = document.createElement('div');
    cardNameDiv.setAttribute('class','cardNameDiv');

    var cardName = document.createElement('input')
    cardName.setAttribute('class','cardName');
    cardName.setAttribute('type','text');
    cardName.setAttribute('placeholder','Enter name on card');

    cardNameDiv.append(cardName);
    var cardPayDiv = document.createElement('div');
    cardPayDiv.setAttribute('class','cardPayDiv');

    var cardPay = document.createElement('button');
    cardPay.setAttribute('class','cardPay');
    cardPay.textContent = "Pay " +totalamount ;
    cardPay.addEventListener('click',checkPay);
    function checkPay(){
        if(cardNumber.value !== ""  && cardMonth.value !== "" && cardYear.value !== "" && cardCvv.value !== "" ){
            window.location.href = "paymentotp.html";
        }
        else{
            alert("Your card information is invalid");
        }
    }


    cardPayDiv.append(cardPay);
    methodDiv.append(cardNumberDiv,cardDiv2,cardNameDiv,cardPayDiv);
    var securityImg = document.createElement('img');
    securityImg.setAttribute('class','securityImg');
    securityImg.setAttribute('src',"https://pay.momoe.in/payment/img/security_logos.png");
    paymentMethodDiv.append(methodName,methodDiv,securityImg);

}


function creditDetails(){
    let amount=JSON.parse(localStorage.getItem("SelectedPlan"));
    let trainer = JSON.parse(localStorage.getItem("SelectedTrainer"));

    let totalamount = amount.Price + trainer.Fees
    var paymentMethodDiv = document.querySelector("#paymentMethodDiv");
    paymentMethodDiv.innerHTML="";
    count++;
    var methodName = document.createElement('h3');
    methodName.setAttribute('class','methodName');
    methodName.textContent = "Credit Card";

    var methodDiv = document.createElement('div');
    methodDiv.setAttribute('class','methodDiv');

    var cardNumberDiv = document.createElement('div');
    cardNumberDiv.setAttribute('class','cardNumberDiv');

    var cardNumber = document.createElement('input')
    cardNumber.setAttribute('class','cardNumber');
    cardNumber.setAttribute('type','text');
    cardNumber.setAttribute('placeholder','Enter card number');

    cardNumberDiv.append(cardNumber);

    var cardDiv2 = document.createElement('div');
    cardDiv2.setAttribute('class','cardDiv2');

    var cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('class','cardDateDiv');

    var cardMonth = document.createElement('input')
    cardMonth.setAttribute('class','cardMonth');
    cardMonth.setAttribute('type','text');
    cardMonth.setAttribute('placeholder','MM');

    var cardYear = document.createElement('input')
    cardYear.setAttribute('class','cardYear');
    cardYear.setAttribute('type','text');
    cardYear.setAttribute('placeholder','YY');

    var slash = document.createElement('span');
    slash.setAttribute('class','slash');
    slash.textContent = "/";

    cardDateDiv.append(cardMonth,slash,cardYear);

    var cardCvvDiv = document.createElement('div');
    cardCvvDiv.setAttribute('class','cardCvvDiv');

    var cardCvv = document.createElement('input')
    cardCvv.setAttribute('class','cardCvv');
    cardCvv.setAttribute('type','text');
    cardCvv.setAttribute('placeholder','CVV');

    cardCvvDiv.append(cardCvv);

    cardDiv2.append(cardDateDiv,cardCvvDiv);

    var cardNameDiv = document.createElement('div');
    cardNameDiv.setAttribute('class','cardNameDiv');

    var cardName = document.createElement('input')
    cardName.setAttribute('class','cardName');
    cardName.setAttribute('type','text');
    cardName.setAttribute('placeholder','Enter name on card');

    cardNameDiv.append(cardName);

    var cardPayDiv = document.createElement('div');
    cardPayDiv.setAttribute('class','cardPayDiv');

    var cardPay = document.createElement('button');
    cardPay.setAttribute('class','cardPay');
    cardPay.textContent = "Pay "+totalamount;
    cardPay.addEventListener('click',checkPay);

    function checkPay(){
        if(cardNumber.value == "1111 2222 3333 4444" && cardMonth.value == "11" && cardYear.value == "22" && cardCvv.value == "123" ){
            window.location.href = "paymentotp.html";
        }
        else{
            alert("Your card information is invalid");
        }
    }

    cardPayDiv.append(cardPay);

    methodDiv.append(cardNumberDiv,cardDiv2,cardNameDiv,cardPayDiv);

    var securityImg = document.createElement('img');
    securityImg.setAttribute('class','securityImg');
    securityImg.setAttribute('src',"https://pay.momoe.in/payment/img/security_logos.png");

    paymentMethodDiv.append(methodName,methodDiv,securityImg);

}

function coddetails(){
    let amount=JSON.parse(localStorage.getItem("SelectedPlan"));
    let trainer = JSON.parse(localStorage.getItem("SelectedTrainer"));

    let totalamount = amount.Price + trainer.Fees
    var paymentMethodDiv = document.querySelector("#paymentMethodDiv");
    paymentMethodDiv.innerHTML="";
    
    var methodName = document.createElement('h3');
    methodName.setAttribute('class','methodName');
    methodName.textContent = "Cash On Delivery";

    var cardPayDiv = document.createElement('div');
    cardPayDiv.setAttribute('class','cardPayDiv');
    
    var cardPay = document.createElement('button');
    cardPay.setAttribute('id','codPay');
    cardPay.textContent = `Pay on Delivery : ${totalamount}`;
    cardPay.addEventListener('click',checkPay);

    function checkPay(){
        window.location.href = "paymentotp.html";
    }

    cardPayDiv.append(cardPay);
    paymentMethodDiv.append(methodName,cardPayDiv);
}
