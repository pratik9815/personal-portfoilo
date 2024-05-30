// function toggleFunction() {
//     var checkbox = document.getElementById("checkbox");
//     var element = document.getElementById("menu-toggle");   

//     if (checkbox.checked) {
//         element.style.display = "block";
//     } else {
//         element.style.display = "none";
//     }
// }


// function isChecked()
// {
//     var checkbox = document.getElementById("checkbox");
//     console.log(checkbox.checked);
// }

// document.addEventListener("DOMContentLoaded",function() {
//     var navLinks = document.querySelectorAll('.nav-item');
//     navLinks.forEach(function(links){
//         links.addEventListener('click',function(){
//             document.getElementById('checkbox').checked = false;
//         });
//     });

// })


window.addEventListener('scroll', reveal);
window.addEventListener('scroll', onScroll);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
}
function onScroll(event) {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    let maxVisibleArea = 0;

    let currentSection = null;
    sections.forEach(section => {
        const visibleArea = getVisibleArea(section);
        console.log(visibleArea.toFixed())
        if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(items => {
        items.classList.remove('active');
        items.querySelector('a').removeAttribute('aria-current');
        if (items.querySelector('a').getAttribute('href').substring(1) === currentSection) {
            items.classList.add('active');
            items.querySelector('a').setAttribute('aria-current', 'page');
        }
    });

}

function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    return visibleHeight * visibleWidth;
}

function updateActiveNavItem(event) {

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('a').removeAttribute('aria-current');
    });

    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('a').setAttribute('aria-current', 'page');
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', updateActiveNavItem);

});
