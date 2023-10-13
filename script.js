const menuIcon = document.getElementById("menuIcon");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
});