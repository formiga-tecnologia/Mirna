var element=document.getElementById("addColumn01")
var fristUse=true
function AddNewColumn(){
    let elementTodreate=document.createElement('div')
    let elementAppend = document.getElementById("bodyModal")
    if(fristUse==true){
        
        element.style.visibility="hidden"
        elementTodreate.classList+="addnewColumn"
        elementTodreate.id="addColumn3"
        elementAppend.appendChild(elementTodreate)
        elementAppend=document.getElementById("addColumn3")
        elementTodreate=document.createElement('label')
        elementAppend.appendChild(elementTodreate)        
        elementTodreate.innerHTML+="Nome da Coluna: "
        elementTodreate=document.createElement('input')
        elementAppend.appendChild(elementTodreate)
        elementTodreate=document.createElement('button')
        elementTodreate.classList+="btAddTable"
        elementTodreate.id="btAddColumn01"
        elementAppend.appendChild(elementTodreate)
        element.removeEventListener("click",AddNewColumn,false)
        elementTodreate.addEventListener("click",AddNewColumn,false)
        fristUse=false
    }
    else{
        console.log("só copiar o codigo de cima")
    }
}

element.addEventListener("click",AddNewColumn,false)