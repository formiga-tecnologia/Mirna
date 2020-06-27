var element=document.getElementById("addColumn01")
var fristUse=true
var idCol=0
var createdCol=0
var AppendLines=0
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
        elementTodreate.id="inputTable"+idCol
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
        elementTodreate.id="inputTable"+idCol
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

function AddTable(){
    createdCol=idCol
    let EmpetyField=false
    for (let index = 0; index < createdCol; index++){
        
        if(document.getElementById("inputTable"+index).value==""){
            alert("a coluna n°"+(index+2)+" esta vazia, deposite um valor valido!")
            EmpetyField=true
            break
        }
    }
    if(EmpetyField==false)
    {
    document.getElementById("TableNoAdd").remove()
    AddColumns(document.getElementById("MainColumn").value)
    for (let index = 0; index < createdCol; index++){
        AddColumns(document.getElementById("inputTable"+index).value)
    }
    AddLines("RowId")
    modal.style.display = "none";
    document.body.style.overflowY="visible"
    clearDash()
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
    }
    idCol=0;
}

function addNewLine(){
    AppendLines+=1
    AddLines("RowId"+AppendLines)
}

element.addEventListener("click",AddNewColumn,false)
document.getElementById("addTable_bt01").addEventListener("click",AddTable,false)
document.getElementById("addLine").addEventListener("click",addNewLine,false)