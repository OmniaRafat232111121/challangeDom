document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";

// Header Line 5 To 42

let header = document.createElement("header")
header.className = "website-head"
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;"

let logoDiv = document.createElement("div")
logoDiv.style.cssText = "font-weight: bold; color: # 23a96e; font-size: 22px"
let logoText = document.createTextNode("Elzero")

let ul = document.createElement("ul")
ul.className = "menu"
ul.style.cssText = "padding: 0px; margin: 0px; display: flex; list-style: none; color: rgb(136, 136, 136)"

let li1 = document.createElement("li")
li1.style.cssText = "padding-right: 20px"
let li1Text = document.createTextNode("Home")
let li2 = document.createElement("li")
li2.style.cssText = "padding-right: 20px"
let li2Text = document.createTextNode("About")
let li3 = document.createElement("li")
li3.style.cssText = "padding-right: 20px"
let li3Text = document.createTextNode("Service")
let li4 = document.createElement("li")
li4.style.cssText = "padding-right: 5px"
let li4Text = document.createTextNode("Contact")

li1.appendChild(li1Text)
li2.appendChild(li2Text)
li3.appendChild(li3Text)
li4.appendChild(li4Text)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)

logoDiv.appendChild(logoText)

header.appendChild(logoDiv)
header.appendChild(ul)


//content

document.body.appendChild(header)
document.body.appendChild(contentDiv)
document.body.appendChild(footer)