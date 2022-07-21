






















//italo startt

const $asideMenuIcon = document.getElementById("aside-menu-icon")
const $asideNavbar = document.getElementById("aside-navbar")
const $Xmark = document.getElementsByClassName("fa-xmark")
const $obscureBody = document.getElementById("obscure-body")
const $whiteNav = document.getElementById("white-navbar")
const $darkNav = document.getElementById("dark-navbar")
const $body = document.getElementsByTagName("body")

function getStyleVAlue(element, style) {
    const property = getComputedStyle(element)
    return (property[style])
}


function asideShow() {
    $obscureBody.classList.add("opacity")
    $asideNavbar.classList.add("margin")
    $darkNav.classList.add("up")
}

function asideHidden() {
    $asideNavbar.classList.remove("margin")
    $obscureBody.classList.remove("opacity")
}

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $darkNav.classList.add("up")

    } else if (window.pageYOffset > 50) {
        $darkNav.classList.remove("up")
    }
    prevScrollpos = currentScrollPos;

}


/* media querie js */

const $logoHomeNavbar = document.getElementById("logo-home-navbar")
const $navTitle = document.getElementById("nav-title")
const $dropdownMenuNav = document.querySelector("#dropdown-menu-nav")


//function to change content
function mediaQuery(x, y, z) {
    const clone1 = $logoHomeNavbar.cloneNode(true)
    const clone2 = $dropdownMenuNav.cloneNode(true)

    if (x.matches) { // If media query matches
        if (document.querySelector("#nav-title #logo-home-navbar") !== null) {
            document.querySelector("#nav-title #logo-home-navbar").remove()
            document.querySelector("#aside-navbar #dropdown-menu-nav").remove()
        }

    } else if (y.matches) { // If media query matches 
        if (document.querySelector("#nav-title #logo-home-navbar") === null) {
            $navTitle.appendChild(clone1)
            $asideNavbar.append(clone2)
        } 
    } else if (z.matches) { // If media query matches
        if (document.querySelector("#nav-title #logo-home-navbar") === null) {
            $navTitle.appendChild(clone1)
            $asideNavbar.append(clone2)
        } 
    }
}
let x = window.matchMedia("(min-width: 1024px)")
let y = window.matchMedia("(min-width: 768px) and (max-width: 1024px)")
let z = window.matchMedia("(max-width: 767px)")
mediaQuery(x, y, z)

// check screen size all (All rights reserved)
let ToCheker = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches
setInterval(function () {
    let changer = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches
    if (changer !== ToCheker) {
        ToCheker = changer
        mediaQuery(x, y, z)
    }
}, 500)

//buttons asidebar

let $asideMeunDropdown = document.querySelectorAll("#aside-navbar #dropdown-menu-nav #dropdown-menu-item-nav")

$asideMeunDropdown.forEach((element, index) => {

 element.addEventListener("click", ()=>{ 
    if ($asideMeunDropdown[index].classList.contains("show")) {
    $asideMeunDropdown[index].classList.remove("show")
} else {
    $asideMeunDropdown[index].classList.add("show")
}} )
});



//italo finish (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)