var btn = document.getElementById("proximo");
var slider = document.querySelector(".slider");

// btn.addEventListener("click", ()=>{
//     slider.classList.toggle("active")

// })
function HomePage() {
    window.location.href =  "HomePage.html";
}
function irParaConsultaPage(){
    window.location.href = "AgendarConsultaPage.html"
}
function RealizarAgendamento(){
    window.location.href = "ConfirmPage.html"
}
function ConfimarConsulta(){
    window.location.href = "HomePage.html"
}

function GoToEditUserPage() {
    window.location.href = "EditUserPage.html"
}

var EditFoto = document.querySelector(".foto-perfil")
var pincel = document.querySelector(".img-perfil i")
var oacityPerfil = document.querySelector(".foto-perfil img")
EditFoto.addEventListener("mousemove", ()=>{
    pincel.classList.add("active")
    // window.alert("Foi?")
})
EditFoto.addEventListener("mouseout" , ()=>{
    pincel.classList.remove("active")
})
