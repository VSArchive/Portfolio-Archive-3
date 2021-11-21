window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.background = "#FFFFFF"
    } else {
        document.getElementById("navbar").style.background = "transparent"
    }
}
