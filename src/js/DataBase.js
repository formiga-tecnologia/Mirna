var SellInfo=["563819","Sofa","R$367,00","2","234596","Cadeira","R$76,00","4","123496","Cadeira Redonda","R$267,00","2"]

function CreateSellBase(){
    let valueIndex=0
    document.getElementById("TableNoAdd").remove()
    AddColumns("Codigo")
    AddColumns("Produto")
    AddColumns("Preço")
    AddColumns("Quantidade")
    AddLines("SellReport")
    AddLines("SellReport1")
    AddLines("SellReport2")
    SellInfo.reverse()
    for (let index = 0; index < document.getElementsByTagName("th").length; index++) {
        console.log("SellReport"+index)
        document.getElementById("SellReport"+index).value=SellInfo[valueIndex]
        valueIndex+=1
    }

    for (let index = 0; index < document.getElementsByTagName("th").length; index++) {
        console.log("SellReport"+index)
        document.getElementById("SellReport1"+index).value=SellInfo[valueIndex]
        valueIndex+=1
    }

    for (let index = 0; index < document.getElementsByTagName("th").length; index++) {
        console.log("SellReport"+index)
        document.getElementById("SellReport2"+index).value=SellInfo[valueIndex]
        valueIndex+=1
    }
    SellInfo.reverse()
}