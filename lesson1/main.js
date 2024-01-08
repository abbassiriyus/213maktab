var parol="1234546"
var email="a"



function clids(params) {
    var inpp=document.querySelector('.parol').value
    var inpe=document.querySelector('.email').value
if(inpe==email && inpp==parol && inpe.includes("@gmail.com")){
window.location="https://kun.uz"
}else{
    if(!(inpe.includes("@gmail.com"))){
alert("email deb yozainj ")
    }
    if(inpe!=email){
document.querySelector(".email").style="border:2px solid red"
    }else{
        document.querySelector(".email").style="border:2px solid gray"
    }
    if(inpp!=parol){
        document.querySelector(".parol").style="border:2px solid red"
    }else{
        document.querySelector(".parol").style="border:2px solid gray"
    }

alert('xato')
}
}