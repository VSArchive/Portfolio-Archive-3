window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.background = "#FFFFFF"
    } else {
        document.getElementById("navbar").style.background = "transparent"
    }
}

function home() {
    document.getElementById("aboutNav").classList.remove('active')
    document.getElementById("homeNav").classList.add('active')
    document.getElementById("skillsNav").classList.remove('active')
    document.getElementById("projectsNav").classList.remove('active')
    document.getElementById("contactNav").classList.remove('active')
}
function about() {
    document.getElementById("aboutNav").classList.add('active')
    document.getElementById("homeNav").classList.remove('active')
    document.getElementById("skillsNav").classList.remove('active')
    document.getElementById("projectsNav").classList.remove('active')
    document.getElementById("contactNav").classList.remove('active')
}
function skills() {
    document.getElementById("aboutNav").classList.remove('active')
    document.getElementById("homeNav").classList.remove('active')
    document.getElementById("skillsNav").classList.add('active')
    document.getElementById("projectsNav").classList.remove('active')
    document.getElementById("contactNav").classList.remove('active')
}
function projects() {
    document.getElementById("aboutNav").classList.remove('active')
    document.getElementById("homeNav").classList.remove('active')
    document.getElementById("skillsNav").classList.remove('active')
    document.getElementById("projectsNav").classList.add('active')
    document.getElementById("contactNav").classList.remove('active')
}
function contact() {
    document.getElementById("contactNav").classList.add('active')
    document.getElementById("aboutNav").classList.remove('active')
    document.getElementById("homeNav").classList.remove('active')
    document.getElementById("skillsNav").classList.remove('active')
    document.getElementById("projectsNav").classList.remove('active')
}
