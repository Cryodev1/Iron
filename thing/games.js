var title = document.createElement("div")
title.className = "tabtitle"
title.innerText = "Games (use full screen)"
appid.appendChild(title)

var elements = document.createElement("center")

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".cl{text-align:center;color:white;} .tabtitle {font-size: 30px; text-align: center; color: white; user-select: none; margin-top: 10px;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var frame = document.createElement("iframe")
frame.setAttribute("src", "https://cryodream.dev/games.html");
frame.style.width = "1000px"
frame.style.height = "650px"
elements.appendChild(frame)

appid.appendChild(elements)