var FieldCell = []

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
        input.value=FieldCell[index]
    }
FieldCell.reverse()
}
FieldCell.push("093456")
FieldCell.push("Quadros")
FieldCell.push("R$20,00")
FieldCell.push("4")
FieldCell.push("9")
FieldCell.push("03/03/2020")
AddLines("value")