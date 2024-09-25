var btn = document.getElementById("proximo");
var slider = document.querySelector(".slider");

btn.addEventListener("click", ()=>{
    slider.classList.toggle("active")

})
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