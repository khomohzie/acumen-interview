// Global JS

let navLink = document.getElementsByClassName("sidebar__nav-item");

let activePath = window.location.pathname;

if (activePath.includes("/index.html")) {
    navLink[0].classList.add("active");
} else if (activePath.includes("/details.html")) {
    navLink[1].classList.add("active");
}

let sidebarBtn = document.querySelector(".sidebar-mobile");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");

sidebarBtn.addEventListener("click", function () {
    sidebar.style.display = "block";
    sidebar.style.zIndex = 1000;
    sidebar.style.width = "60%";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    sidebar.style.display = "none";
    sidebar.style.zIndex = 0;
    sidebar.style.width = "0";
});