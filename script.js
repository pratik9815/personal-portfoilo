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
