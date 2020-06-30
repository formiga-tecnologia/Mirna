var FieldCell = []
var indexColDash=0
var selectionBase=true

function AddLines(IdCode){
let tableRef = document.getElementById('dashTable').getElementsByTagName('tbody')[0];
let newRow   = tableRef.insertRow();
let newCell  = newRow;
let input
FieldCell.reverse()
for (let index = 0; index < document.getElementById('dashTable').getElementsByTagName('th').length; index++) {
    newCell=newRow.insertCell(0)
    input=document.createElement("input")
    input.id=IdCode+index
    newCell.appendChild(input)
    }
    for (let index = 0; index < document.getElementById('dashTable').getElementsByTagName('th').length; index++){
        input= document.getElementById(IdCode+index)
        input.value=""
    }
FieldCell.reverse()
}

function AddColumns(ColumnName){
    let row= document.getElementById("topTable")
    let thCollum = document.createElement('th')
    thCollum.addEventListener("click",SelectLines,false)
    thCollum.innerText=ColumnName
    thCollum.id="col"+indexColDash
    let X =  row.appendChild(thCollum)
    indexColDash+=1

}

function SelectLines(){
    let querySelection = this.id
    let LinesQuant =  document.getElementsByTagName('tr').length-1
    querySelection = querySelection.replace("col",'')
    querySelection = (document.getElementsByTagName('th').length-1)-querySelection
    console.log(querySelection)
    if(selectionBase==true){
        for (let index = 0; index < document.getElementsByTagName('tr').length-1; index++) {
            document.getElementById("RowId"+index+querySelection).style.transition="2s"
            document.getElementById("RowId"+index+querySelection).style.backgroundColor="#680b7a"
            document.getElementById("RowId"+index+querySelection).style.color="white"
        }
        selectionBase=false
    }
    else{
        console.log("!")
        for (let index = 0; index < document.getElementsByTagName('tr').length-1; index++) {
            document.getElementById("RowId"+index+querySelection).style.backgroundColor="#f2f2f2"
            document.getElementById("RowId"+index+querySelection).style.color="black"
        }
        selectionBase=true
    }
}

