var element=document.getElementById("addColumn01")
var fristUse=true
var idCol=0
function AddNewColumn(){
    let elementTodreate=document.createElement('div')
    let elementAppend = document.getElementById("bodyModal")
    if(fristUse==true){
        element=document.getElementById("addColumn01")
        element.style.visibility="hidden"
        elementTodreate.classList+="addnewColumn"
        elementTodreate.id="addColumn"+idCol
        elementAppend.appendChild(elementTodreate)
        elementAppend=document.getElementById("addColumn"+idCol)
        elementTodreate=document.createElement('label')
        elementAppend.appendChild(elementTodreate)        
        elementTodreate.innerHTML+="Nome da Coluna: "
        elementTodreate=document.createElement('input')
        elementAppend.appendChild(elementTodreate)
        elementTodreate=document.createElement('button')
        elementTodreate.classList+="btAddTable"
        elementTodreate.id="btAddColumn"+idCol
        elementAppend.appendChild(elementTodreate)
        element.removeEventListener("click",AddNewColumn,false)
        elementTodreate.addEventListener("click",AddNewColumn,false)
        fristUse=false
        idCol+=1
    }
    else{
        element=document.getElementById("btAddColumn"+(idCol-1))
        element.style.visibility="hidden"
        elementTodreate.classList+="addnewColumn"
        elementTodreate.id="addColumn"+idCol
        elementAppend.appendChild(elementTodreate)
        elementAppend=document.getElementById("addColumn"+idCol)
        elementTodreate=document.createElement('label')
        elementAppend.appendChild(elementTodreate)        
        elementTodreate.innerHTML+="Nome da Coluna: "
        elementTodreate=document.createElement('input')
        elementAppend.appendChild(elementTodreate)
        elementTodreate=document.createElement('button')
        elementTodreate.classList+="btAddTable"
        elementTodreate.id="btAddColumn"+idCol
        elementAppend.appendChild(elementTodreate)
        element.removeEventListener("click",AddNewColumn,false)
        elementTodreate.addEventListener("click",AddNewColumn,false)
        fristUse=false
        idCol+=1
    }
}

function clearDash(){
    let getClass
    for (let index = 0; index < idCol; index++) {
        getClass = document.getElementById("addColumn"+index)
        document.getElementById("addColumn01").style.visibility="visible"
        document.getElementById("addColumn01").addEventListener("click",AddNewColumn,false)
        fristUse=true
        getClass.remove()
        //getClass = document.getElementById("addColumn"+idCol)
    }
}

element.addEventListener("click",AddNewColumn,false)
