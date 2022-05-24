const humbergrMenu = document.querySelector('.humburger');
const container2 = document.querySelector('.sec1-container2');
const container1 = document.querySelector('.sec1-container1');
const on = document.querySelector('.on');
const off = document.querySelector('.off');
const switchON = document.querySelector('.switch-content');
const menuIsActive = () => {
    humbergrMenu.classList.toggle('active');
}
humbergrMenu.addEventListener('click', menuIsActive);


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//tabs
function recomPackages(){
    container1.style.visibility = "visible";
    container2.style.visibility="hidden";
    container1.style.display= "flex";
    container2.style.display="none";


}
function mainPackages(){
    container1.style.visibility = "hidden";
    container2.style.visibility="visible";
    container1.style.display= "none";
    container2.style.display="flex";
}



//on-off-switch
function onSwitch(){
    on.classList.toggle("mainColor");
    off.classList.toggle("secColor");
}
function offSwitch(){
    // alert("off")
}

//side bar
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";

    document.getElementById("mySidebar").style.position = "fixed";


}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0%";
    document.getElementById("mySidebar").style.display = "none";

}


