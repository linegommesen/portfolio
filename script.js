window.addEventListener("load", sidenVises);

function sidenVises() {
console.log("sidenVises");

 document.querySelector("#menuknap").addEventListener("click", toggleMenu);

////knapper på portfolio.html//
//document.querySelector("#knap").addEventListener("mouseover", mouseoverKnap);
//document.querySelector("#knap2").addEventListener("mouseover", mouseoverKnap);
//document.querySelector("#knap3").addEventListener("mouseover", mouseoverKnap);
//document.querySelector("#knap4").addEventListener("mouseover", mouseoverKnap);
//document.querySelector("#knap5").addEventListener("mouseover", mouseoverKnap);
//document.querySelector("#knap6").addEventListener("mouseover", mouseoverKnap);


}
function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    if(erSkjult == true){
        document.querySelector("#menuknap").textContent = "☰";
        //document.querySelector("#menu").classList.remove("menu_baggrund");
    } else{
        document.querySelector("#menuknap").textContent ="✕";
    //document.querySelector("#menu").classList.add("menu_baggrund");
    }
}

function mouseoverKnap(){
    console.log("mouseoverKnap");
    console.log(this);
    this.removeEventListener("mouseover", mouseoverKnap);

    this.classList.add("grow");

   this.addEventListener("mouseout",mouseoutKnap);

}

function mouseoutKnap(){
    console.log("mouseoutKnap");
    this.removeEventListener("mouseout",mouseoutKnap);

    this.classList.remove("grow");

    this.addEventListener("mouseover", mouseoverKnap);
}

