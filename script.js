window.addEventListener("load", sidenVises);

function sidenVises() {
console.log("sidenVises");

 document.querySelector("#menuknap").addEventListener("click", toggleMenu);

document.querySelector(".knap").addEventListener("mouseover", mouseoverKnap);
}
function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    if(erSkjult == true){
        document.querySelector("#menuknap").textContent = "☰";
    } else{
        document.querySelector("#menuknap").textContent ="✕";
    }
}

function mouseoverKnap(){
    console.log("mouseoverKnap");
    document.querySelector(".knap").removeEventListener("mouseover", mouseoverKnap);
    document.querySelector(".knap").classList.add("grow");
    document.querySelector(".knap").addEventListener("mouseout", mouseoutKnap);
}
function mouseoutKnap(){
    console.log("mouseoutKnap");
      document.querySelector(".knap").removeEventListener("mouseout", mouseoutKnap);
    document.querySelector(".knap").classList.remove("grow");
     document.querySelector(".knap").addEventListener("mouseover", mouseoverKnap);
}
