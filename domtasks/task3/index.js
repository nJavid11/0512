
function addedOne(){
    let row = document.createElement("tr")

    let td1 = document.createElement("td")
    td1.setAttribute("class", "td");

    let td2 = document.createElement("td")
    td2.setAttribute("class", "td");

    td1.innerHTML="Row3 cell1";
    td2.innerHTML="Row3 cell2";
    
    row.appendChild(td1)
    row.appendChild(td2)
    document.getElementById("sampleTable").append(row)
}

addedOne()