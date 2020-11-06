let body = document.body;
let toggle = document.querySelector(".toggle-btn");
let darkMode = localStorage.getItem("darkMode");

const enablelightmode = () => {
    body.classList.add("light-class");
    localStorage.setItem("darkMode", "enabled")
}
const disablelightmode = () => {
    body.classList.remove("light-class");
    localStorage.setItem("darkMode", null)
}
if (darkMode === "enabled") {
    enablelightmode();
}

toggle.addEventListener("click", function () {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enablelightmode();
    } else {
        disablelightmode();
    }
})

