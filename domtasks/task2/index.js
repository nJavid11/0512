
function getThemAll(ID){

    let name = document.getElementById(ID).name
    let type = document.getElementById(ID).type
    let value = document.getElementById(ID).value

    console.log("Name = "+name)
    console.log("Type = "+type)
    console.log("Value = "+value)
}

console.log("First Name:")
getThemAll("1")
console.log("-----------")
console.log("Last name:")
getThemAll("2")