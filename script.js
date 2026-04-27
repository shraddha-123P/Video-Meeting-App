let loginBtn = document.getElementById("loginbtn")
let joinBtn = document.getElementById("join")
let participants = document.getElementById("participants")
let controls = document.getElementById("controls")
let username = document.getElementById("username")
let headerArea = document.getElementById("header")

let muteBtn = document.getElementById("muteBtn")
let camBtn = document.getElementById("camBtn")
let endCall = document.getElementById("endcall")

// Login function
loginBtn.onclick = function(){
let name = username.value
headerArea.innerHTML = name + '<button id="logoutBtn">Logout</button>'
joinBtn.style.display = "block"
document.getElementById("login").style.display = "none"
document.getElementById("logoutBtn").onclick = logout
}

// Join meeting
joinBtn.onclick = function(){
participants.style.display = "grid"
controls.style.display = "block"
}


// Mute/Unmute
muteBtn.onclick = function(){
if(muteBtn.innerText == "Mute"){
muteBtn.innerText = "Unmute"
}else{
muteBtn.innerText = "Mute"
}

}

// Cam on/off
camBtn.onclick = function(){
if(camBtn.innerText == "Cam On"){
camBtn.innerText = "Cam Off"
}else{
camBtn.innerText = "Cam On"
}
}

// End call
endCall.onclick = function(){
participants.style.display = "none"
controls.style.display = "none"
}

// logout
function logout(){
participants.style.display = "none"
controls.style.display = "none"
joinBtn.style.display = "none"

document.getElementById("login").style.display = "block"
username.value = "" 
headerArea.innerHTML =
'<button id="loginbtn">Login</button>'

document.getElementById("loginbtn").onclick = loginBtn.onclick
}