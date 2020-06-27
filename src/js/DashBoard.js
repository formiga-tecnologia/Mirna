function AddLines(IdCode){
let tableRef = document.getElementById('dashTable').getElementsByTagName('tbody')[0];
let newRow   = tableRef.insertRow();
let newCell  = newRow;
let input

for (let index = 0; index < document.getElementById('dashTable').getElementsByTagName('th').length; index++) {
    newCell=newRow.insertCell(0)
    input=document.createElement("input")
    input.id=IdCode+index
    newCell.appendChild(input)
    }
}


AddLines("value")