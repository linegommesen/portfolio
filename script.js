window.addEventListener("load", sidenVises);

function sidenVises() {
console.log("sidenVises");

 document.querySelector("#menuknap").addEventListener("click", toggleMenu);

document.querySelector(".knap").addEventListener("mouseover", mouseoverKnap);
document.querySelector(".knap2").addEventListener("mouseover", mouseoverKnap2);
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
function mouseoverKnap2() {
    console.log("mouseoverKnap2");
  document.querySelector(".knap2").removeEventListener("mouseover", mouseoverKnap2);
    document.querySelector(".knap2").classList.add("grow");
    document.querySelector(".knap2").addEventListener("mouseout", mouseoutKnap2);
}

function mouseoutKnap(){
    console.log("mouseoutKnap");
    document.querySelector(".knap").removeEventListener("mouseout", mouseoutKnap);
    document.querySelector(".knap").classList.remove("grow");
     document.querySelector(".knap").addEventListener("mouseover", mouseoverKnap);


}
function mouseoutKnap2(){
    console.log("mouseoverKnap2");
    document.querySelector(".knap2").removeEventListener("mouseout", mouseoutKnap2);
    document.querySelector(".knap2").classList.remove("grow");
     document.querySelector(".knap2").addEventListener("mouseover", mouseoverKnap2);
}

