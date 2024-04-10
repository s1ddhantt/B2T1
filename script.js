const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function validation(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if(username.value.trim() == "" || password.value.trim() == "")
    {
        alert("please enter a value");
        return false;
    }
    else if( username.value == "8120076348" && password.value == "rickey")
    {
        return "hello welcome to dashboard";
    }
    else{
        
        document.getElementById("label").style.visibility = "visible";
        return false;
    }
}

function mission(){
    document.getElementById('mission').style.visibility = "visible" ;
    document.getElementById('vision').style.visibility = "hidden" ;
    document.getElementById('goal').style.visibility = "hidden" ;
}

function vision(){
    document.getElementById('vision').style.visibility = "visible" ;
    document.getElementById('goal').style.visibility = "hidden" ;
    document.getElementById('mission').style.visibility = "hidden" ;
}

function goal(){
    document.getElementById('goal').style.visibility = "visible" ;
    document.getElementById('mission').style.visibility = "hidden" ;
    document.getElementById('vision').style.visibility = "hidden" ;
}

