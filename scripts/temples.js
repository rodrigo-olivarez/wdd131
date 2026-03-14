const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});