
var historyOfSaoPaulo = document.getElementById("history");
console.log(historyOfSaoPaulo)

var h2 = document.querySelector("h2")
console.log(h2)

h2.innerText = "welcome to São Paulo!!!" 

let elements = document.getElementsByClassName("element")
console.log(elements)


document.querySelectorAll("li")[0].style.color = "blue"


document.querySelectorAll("li")[1].innerText = "Jamboree sandwich at the Jambo-ree"

var image = document.createElement("img")

image.setAttribute("src","https://miro.medium.com/max/600/1*AbIENM-AxXqGSCTnvMjf6Q.jpeg")
var footer = document.querySelector("footer")
footer.appendChild(image)

// Remove function
// var footerText = document.querySelector("h5")
// footerText.remove()