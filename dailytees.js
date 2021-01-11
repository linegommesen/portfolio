window.addEventListener("load", sidenVises);

function sidenVises() {
console.log("sidenVises");

document.querySelector(".knap9").addEventListener("mouseover", mouseoverKnap);
document.querySelector(".knap10").addEventListener("mouseover", mouseoverKnap);
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
