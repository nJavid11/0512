let select=document.querySelector("select")
let arr= select.getElementsByClassName("op")

for (let i = 0; i < arr.length; i++) {
    alert(arr[i].textContent)
}
alert("Count : " + arr.length)