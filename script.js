function toggleFunction() {
    var checkbox = document.getElementById("checkbox");
    var element = document.getElementById("menu-toggle");   
    
    if (checkbox.checked) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


function isChecked()
{
    var checkbox = document.getElementById("checkbox");
    console.log(checkbox.checked);
}

document.addEventListener("DOMContentLoaded",function() {
    var navLinks = document.querySelectorAll('.nav-item');
    // navLinks.forEach
    console.log(navLinks.length);
    navLinks.forEach(function(links){
        links.addEventListener('click',function(){
            document.getElementById('checkbox').checked = false;
        });
    });

})


window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}