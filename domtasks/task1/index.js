
function getThemAll(ID){

    let id = document.getElementById(ID).id
    let href = document.getElementById(ID).href
    let type = document.getElementById(ID).type
    let rel = document.getElementById(ID).rel
    let target = document.getElementById(ID).target

    console.log(id)
    console.log(href)
    console.log(type)
    console.log(rel)
    console.log(target)
}

getThemAll("w3r")