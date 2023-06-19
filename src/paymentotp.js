window.alert("123456 is your OTP");
function otpCheck(){
    var paymentotp = document.querySelector('.otp');
    var message = document.querySelector('.message');
    var thanking = document.querySelector('.thanking');
    if(paymentotp.value == "123456"){
        message.textContent = "Payment Successful";
        thanking.textContent = "Thank You! Our Club Representative Will Contact You Soon";
        setTimeout(()=>{
            window.location = "index.html"
        },3000)
        
        
    }
    else{
        alert("Please Enter Valid OTP");
    }
}
document.querySelector(".payButton").addEventListener("click",otpCheck);