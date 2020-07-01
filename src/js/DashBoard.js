var FieldCell = []
var indexColDash=0
var selectionBase=true
var QuerySelection_global=0

function AddLines(IdCode){
let tableRef = document.getElementById('dashTable').getElementsByTagName('tbody')[0];
let newRow   = tableRef.insertRow();
let newCell  = newRow;
let input
FieldCell.reverse()
for (let index = 0; index < document.getElementById('dashTable').getElementsByTagName('th').length; index++) {
    newCell=newRow.insertCell(0)
    newCell.id=IdCode+"cell"+index
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

function addTables(){
    //<div class="elementsDashBarTables"><a href="#">Tabela 1 </a></div>
    let appendObject= document.getElementById("DashBarTables")
    let newObject= document.createElement("div")
    newObject.classList+="elementsDashBarTables"
    newObject.id="table0"
    appendObject.appendChild(newObject)
    newObject=document.createElement("a")
    newObject.setAttribute("href","#")
    newObject.innerText+="Tabela 1"
    //newObject.id="table0"
    appendObject=document.getElementById("table0")
    appendObject.appendChild(newObject)
}

function SelectLines(){
    let querySelection = this.id
    if(selectionBase==true){
        querySelection = querySelection.replace("col",'')
        querySelection = (document.getElementsByTagName('th').length-1)-querySelection
        for (let index = 0; index < document.getElementsByTagName('tr').length-1; index++) {
            console.log("RowId"+index+querySelection)
            document.getElementById("RowId"+index+querySelection).style.transition="2s"
            document.getElementById("RowId"+index+querySelection).style.backgroundColor="#680b7a"
            document.getElementById("RowId"+index+querySelection).style.color="white"

            document.getElementById("RowId"+index+"cell"+querySelection).style.transition="2s"
            document.getElementById("RowId"+index+"cell"+querySelection).style.backgroundColor="#680b7a"
            document.getElementById("RowId"+index+"cell"+querySelection).style.color="white"
            SelectCell.push(document.getElementById("RowId"+index+querySelection).value)
        }
        selectionBase=false
        QuerySelection_global=querySelection
    }
    else{
        for (let index = 0; index < document.getElementsByTagName('tr').length-1; index++) {
            SelectCell=[]
            document.getElementById("RowId"+index+QuerySelection_global).style.backgroundColor="#f2f2f2"
            document.getElementById("RowId"+index+QuerySelection_global).style.color="black"

            document.getElementById("RowId"+index+"cell"+QuerySelection_global).style.backgroundColor="#f2f2f2"
            document.getElementById("RowId"+index+"cell"+QuerySelection_global).style.color="white"
        }
        selectionBase=true
    }
    console.log(SelectCell)
}

