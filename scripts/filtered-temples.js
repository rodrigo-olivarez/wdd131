const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salvador Brazil",
        location: "Salvador, Brazil",
        dedicated: "2024, October, 20",
        area: 29963,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-salvador-el-salvador/400x250/san-salvador-el-salvador-temple-lds-848576-wallpaper.jpg"

    },
    {
        templeName: "Tucson Arizona",
        location: "Tucson, Arizona, United Stated",
        dedicated: "2017, August, 13",
        area: 38216,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-exterior-1929273-wallpaper.jpg"

    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19-21",
        area: 45800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-1075592-wallpaper.jpg"

    },
];

const templeContainer = document.querySelector(".temples");

function createTempleCard(filteredTemples) {
    templeContainer.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${temple.dedicated}</p>
      <p><span>Size:</span> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

        templeContainer.appendChild(card);
    });
}

// Initial call to display all temples
createTempleCard(temples);


const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.textContent;

        let filteredList = temples;

        if (filter === "Old") {
            filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (filter === "New") {
            filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (filter === "Large") {
            filteredList = temples.filter(t => t.area > 90000);
        } else if (filter === "Small") {
            filteredList = temples.filter(t => t.area < 10000);
        }

        createTempleCard(filteredList);

        document.querySelector("main h2").textContent = filter.toUpperCase();
    });
});
