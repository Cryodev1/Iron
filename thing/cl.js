var title = document.createElement("div")
title.className = "tabtitle"
title.innerText = "Changelog (full screen for full changelog)"
appid.appendChild(title)

var vbuttons = document.createElement("center")

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".cl{text-align:center;color:white;} .tabtitle {font-size: 30px; text-align: center; color: white; user-select: none; margin-top: 10px;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var v1dot0dot4 = document.createElement("strong")
v1dot0dot4.innerText = "v1.0.4"
v1dot0dot4.className = "cl"
vbuttons.appendChild(v1dot0dot4)

var v1dot0dot4p = document.createElement("p")
v1dot0dot4p.innerText = "Embeded proxy search and changelog"
v1dot0dot4p.className = "cl"
vbuttons.appendChild(v1dot0dot4p)

var v1dot0dot3 = document.createElement("strong")
v1dot0dot3.innerText = "v1.0.3"
v1dot0dot3.className = "cl"
vbuttons.appendChild(v1dot0dot3)

var v1dot0dot3p = document.createElement("p")
v1dot0dot3p.innerText = "Added changelog"
v1dot0dot3p.className = "cl"
vbuttons.appendChild(v1dot0dot3p)

var v1dot0dot2 = document.createElement("strong")
v1dot0dot2.innerText = "v1.0.2"
v1dot0dot2.className = "cl"
vbuttons.appendChild(v1dot0dot2)

var v1dot0dot2p = document.createElement("p")
v1dot0dot2p.innerText = "Added proxy search to the app (interactive ui hopefully coming soon)"
v1dot0dot2p.className = "cl"
vbuttons.appendChild(v1dot0dot2p)

var v1dot0dot1 = document.createElement("strong")
v1dot0dot1.innerText = "v1.0.1"
v1dot0dot1.className = "cl"
vbuttons.appendChild(v1dot0dot1)

var v1dot0dot1p = document.createElement("p")
v1dot0dot1p.innerText = "Added Quick Cloak"
v1dot0dot1p.className = "cl"
vbuttons.appendChild(v1dot0dot1p)

var v1dot0dot0 = document.createElement("strong")
v1dot0dot0.innerText = "v1.0.0"
v1dot0dot0.className = "cl"
vbuttons.appendChild(v1dot0dot0)

var v1dot0dot0p = document.createElement("p")
v1dot0dot0p.innerText = "Added tab cloak and avo thanks to "
v1dot0dot0p.className = "cl"
vbuttons.appendChild(v1dot0dot0p)

appid.appendChild(vbuttons)