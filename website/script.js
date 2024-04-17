const temperatureElement = document.getElementById('temperature');

async function getOutdoorTemperature() {
    const response = await fetch('https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam');
    const data = await response.json();
    const outdoorTemperature = parseFloat(data.liveweer[0].temp);
    return outdoorTemperature;
}

async function main() {
    try {
        const outdoorTemperature = await getOutdoorTemperature();
        temperatureElement.textContent = `${outdoorTemperature} °C`;
    } catch (error) {
        console.error('Er is een fout opgetreden bij het ophalen van de buitentemperatuur:', error);
        temperatureElement.textContent = 'Kon buitentemperatuur niet ophalen';
    }
}

window.onload = main;


fetch('https://api.sunrisesunset.io/json?lat=52.37403&lng=4.88969')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.zonsopkomst').textContent += ` ${data.results.sunrise}`;
        document.querySelector('.zonsondergang').textContent += ` ${data.results.sunset}`;
    });


const labels = [
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
    "Zondag"
];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Energieverbruik in KwH",
            data: [28, 10, 40, 16, 9, 8, 11],
            backgroundColor: 'white',
            borderColor: 'black '
        }
    ]
}

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                ticks: {
                    color: 'black'
                }
            },
            y: {
                ticks: {
                    color: 'black'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black'
                }
            }
        }
    }
};




new Chart(document.getElementById("js--chart"), config);