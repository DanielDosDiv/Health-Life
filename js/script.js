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
var ItemNav = document.querySelector(".item-nav")
var lineAnimate = document.querySelector(".line-preset")
var Calendario = document.querySelector(".calendario")



Calendario.addEventListener("mousemove" ,()=>{
    lineAnimate.classList.add("active")
})
ItemNav.addEventListener("mousemove", ()=>{
    lineAnimate.classList.add("active")
})
ItemNav.addEventListener("mouseout", ()=>{
    lineAnimate.classList.remove("active")
})
EditFoto.addEventListener("mousemove", ()=>{
    pincel.classList.add("active")
    // window.alert("Foi?")
})
EditFoto.addEventListener("mouseout" , ()=>{
    pincel.classList.remove("active")
})
