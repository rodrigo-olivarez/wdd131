const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperature = 21;
const windSpeed = 8;
const tempElement = document.querySelector("#temp");
const windElement = document.querySelector("#wind");
const windchillElement = document.querySelector("#windchill");

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0, 3965 * t * Math.pow(v, 0.16)).toFixed(1);

function displayWeather() {
    tempElement.textContent = temperature;
    windElement.textContent = windSpeed;

    if (temperature <= 10 && windSpeed > 4.8) {
        windchillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    }
    else {
        windchillElement.textContent = "N/A";
    }
}

displayWeather();

