
let input = document.querySelector("textarea")
input.focus()

resultText = document.querySelector(".resultCard p")
console.log(resultText.innerHTML)

let botonEncriptar = document.querySelector("button")

botonEncriptar.onclick = () => {
    resultText.innerHTML = input.value
    input.value = ""
}



