//vars locals//
var modal = document.getElementById("NewTable");
var btn = document.getElementById("newTable");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflowY="hidden"
  
}
span.onclick = function() {
  modal.style.display = "none";
  clearDash()
  document.body.style.overflowY="visible"
}
function NewModelClose(){
  modal=document.getElementById("SelectModel")
  modal.style.display = "none";
  clearDash()
  document.body.style.overflowY="visible"
  modal = document.getElementById("NewTable");
}
function NewmodelSell(){
  modal=document.getElementById("SelectModel")
  modal.style.display = "none";
  clearDash()
  //Add new  models to set//
  document.body.style.overflowY="visible"
  modal = document.getElementById("NewTable");
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY="visible"
  }
}
document.getElementById("modeloVazio_bt").addEventListener("click",NewModelClose,false)
document.getElementById("modeloVendas_bt").addEventListener("click",NewmodelSell,false)