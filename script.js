function hint() {
    var hintt = document.getElementById("hint");
    hintt.innerHTML = "Enter minimum 10 digit password !";
}

function loader(){
    var hintt = document.getElementById("hint");
    hintt.style.display = "none";
    var loader = document.getElementById("loader");
    loader.style.opacity="1";
    var pass = document.getElementById("password").value ;
    pass.length>10?loader.style.opacity= "0" : loader.style.opacity="1";
    var check = document.getElementById("check");
    pass.length>10?check.style.opacity="1":check.style.opacity="0";
    
}