var SellInfo=["563819","Sofa","R$367,00","2","234596","Cadeira","R$76,00","4","123496","Cadeira Redonda","R$267,00","2"]
var columns=["Codigo","Produto","Preço","Quantidade"]

function CreateSellBase(){
    let valueIndex=0
    let linesCreated=3
    document.getElementById("TableNoAdd").remove()
    for (let index = 0; index < columns.length; index++) {
        AddColumns(columns[index])
    }
    for (let index = 0; index < 3; index++) {
        AddLines("SellReport"+index)   
    }

    SellInfo.reverse()
    let testValue=0
    while(testValue<linesCreated){
        for (let index = 0; index < document.getElementsByTagName("th").length; index++) {
            document.getElementById("SellReport"+testValue+index).value=SellInfo[valueIndex]
            console.log("SellReport0"+testValue+" || "+SellInfo[valueIndex])
            valueIndex+=1
        }
    testValue+=1
    console.log("break point")
    }
    SellInfo.reverse()
}