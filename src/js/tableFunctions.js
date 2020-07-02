var element=document.getElementById("addColumn01")
var fristUse=true
var idCol=0
var createdCol=0
var AppendLines=0
var tableCreated=false
var TablesOptions=[]
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
    let a = new DataClass("Name01","Colunas01","Inputs","Tabela Nova")
    TablesOptions.push(a)
    let EmpetyField=false
    if(document.getElementById("MainColumn").value==""){
        alert("a coluna n° 1 esta vazia, deposite um valor valido!")
        EmpetyField=true
    }
    for (let index = 0; index < createdCol; index++){

        if(document.getElementById("inputTable"+index).value==""){
            alert("a coluna n°"+(index+2)+" esta vazia, deposite um valor valido!")
            EmpetyField=true
            break
        }
    }
    if(EmpetyField==false)
    {
        if(tableCreated==false)
        {
            document.getElementById("TableNoAdd").remove()
        }
    AddColumns(document.getElementById("MainColumn").value)
    TablesOptions[tablesCreated].ColumnsData.push(document.getElementById("MainColumn").value)
    for (let index = 0; index < createdCol; index++){
        AddColumns(document.getElementById("inputTable"+index).value)
        TablesOptions[tablesCreated].ColumnsData.push(document.getElementById("inputTable"+index).value)
    }
    console.log(TablesOptions[tablesCreated].ColumnsData)
    modal.style.display = "none";
    document.body.style.overflowY="visible"
    tableCreated=true
    addTables()
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
    if(AppendLines>=1 || tableCreated==true ){
        AddLines("RowId"+AppendLines)
        AppendLines+=1
    }
    else{
        alert("Adicione uma Tabela para adicionar linhas")
    }
}

function updateTable(){
    //Adicionar aqui as condições para atualizar a tabela
    //Isso para gravar em uma Array.
    console.log("Saiu da tabela mane")
}

element.addEventListener("click",AddNewColumn,false)
document.getElementById("addTable_bt01").addEventListener("click",AddTable,false)
document.getElementById("addLine").addEventListener("click",addNewLine,false)
document.getElementById("TableNoAdd").addEventListener("mouseout",updateTable,false)