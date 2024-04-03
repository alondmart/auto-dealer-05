// adds current year in footer
const currentYear = new Date()
document.querySelector("#year").innerHTML = currentYear.getFullYear()

function toggleMenu() {
    document.querySelector("#navItems").classList.toggle("open");
    document.querySelector("#menuBtn").classList.toggle("open");
}

const x = document.querySelector("#menuBtn")

x.onclick = toggleMenu;