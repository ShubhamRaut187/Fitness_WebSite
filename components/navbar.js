let ButtonName = localStorage.getItem('ButtonName') || 'Sign-Up';
let ButtonId = "";
if(ButtonName !== 'Sign-Up'){
    ButtonId = 'logout_btn'
}
else{
    ButtonId = 'Sign-Up_btn'
}

let navbar = ()=>{
    return ` <div id="nav_logo_div">
    <img id="navbar_logo"src="https://th.bing.com/th?id=OIP.OK9_rtCair2PEugAGqQkiwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo">
</div>
<div id="nav_button">
<button id="ownafranchise">Own a Franchise</button>
<button id="trainwithus">Train With Us</button>
<button id="findclub_btn">Membership</button>
<button id=${ButtonId}>${ButtonName}</button>
</div>
`
}

export default navbar;