
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
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY="visible"
  }
}