let loginBtn = document.getElementById("loginbtn")
let joinBtn = document.querySelector(".join")
let participants = document.getElementById("participants")
let controls = document.querySelector(".controls")
let username = document.getElementById("username")
let headerArea = document.getElementById("header")

let muteBtn = document.getElementById("muteBtn")
let camBtn = document.getElementById("camBtn")
let endCall = document.getElementById("endcall")



loginBtn.onclick = function(){

let name = username.value

headerArea.innerHTML =
name + ' <button id="logoutBtn">Logout</button>'

joinBtn.style.display = "block"

document.getElementById("login").style.display = "none"

document.getElementById("logoutBtn").onclick = logout
}


joinBtn.onclick = function(){

participants.style.display = "grid"
controls.style.display = "block"
}



muteBtn.onclick = function(){

if(muteBtn.innerText == "Mute"){
muteBtn.innerText = "Unmute"
}else{
muteBtn.innerText = "Mute"
}

}


camBtn.onclick = function(){

if(camBtn.innerText == "Cam On"){
camBtn.innerText = "Cam Off"
}else{
camBtn.innerText = "Cam On"
}

}


endCall.onclick = function(){

participants.style.display = "none"
controls.style.display = "none"

}


function logout(){

participants.style.display = "none"
controls.style.display = "none"

joinBtn.style.display = "none"

document.getElementById("login").style.display = "block"

headerArea.innerHTML =
'<button id="loginbtn">Login</button>'

document.getElementById("loginbtn").onclick = loginBtn.onclick

}