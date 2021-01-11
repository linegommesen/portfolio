window.addEventListener("load", sidenVises);

function sidenVises() {
console.log("sidenVises");

//knapper på portfolio.html//
document.querySelector("#knap").addEventListener("mouseover", mouseoverKnap);
document.querySelector("#knap2").addEventListener("mouseover", mouseoverKnap);
document.querySelector("#knap3").addEventListener("mouseover", mouseoverKnap);
document.querySelector("#knap4").addEventListener("mouseover", mouseoverKnap);
document.querySelector("#knap5").addEventListener("mouseover", mouseoverKnap);
document.querySelector("#knap6").addEventListener("mouseover", mouseoverKnap);

document.querySelector("#overskrift").classList.add("skrump");
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
