class DataClass{
    constructor(NameData,Columns,Inputs,TableName){
        this.NameData=NameData
        this.Columns=Columns
        this.Input=Inputs
        this.TableName = TableName
    }
    showData(){
        console.log(this.NameData)
        console.log(this.TableName)
    }
}