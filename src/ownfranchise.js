import nabar from "../components/navbar.js"
import footer from "../components/footer.js"
let nav = document.getElementById("navbar");
nav.innerHTML = nabar();
let foot = document.getElementById("footer")
foot.innerHTML = footer();