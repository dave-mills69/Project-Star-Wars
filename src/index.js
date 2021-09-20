//  url - https://swapi.dev/api/

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


const results = document.querySelector('#results');

async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}`);
    const data = await res.json();
    displayResults(data, value);
}


function displayResults(data, value) {
    let output = "";
    if (value === 'films') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" style="opacity:.8">
                <h4 class="card-title text-center">${item.title}</h4>
                <div class="card-content">
                    <span style="text-decoration:underline">Producer: </span>${item.producer}<br>
                    <span style="text-decoration:underline">Director: </span>${item.director}<br>
                    <span style="text-decoration:underline">Release Date: </span>${item.release_date}<br>
                    <p class=""text-center>${item.opening_crawl}</p>
                </div>
            </div>
            `
        })
    }
    results.innerHTML = output;
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
        <div class="card p-3 m-3" style="opacity:.8">
            <h4 class="card-title text-center"> ${item.name} </h4>
            <div class="card-content">
                <span style="text-decoration:underline">Birth Year: </span>${item.birth_year}<br>
                <span style="text-decoration:underline">Eye Color: </span>${item.eye_color}<br>
                <span style="text-decoration:underline">Gender: </span>${item.gender}<br>
                <span style="text-decoration:underline">Height: </span>${item.height}<br>
            </div>
        </div>
        `
        })

    }

    if (value === 'planets') {
        data.results.forEach(item => {
            output += `
        <div class="card p-3 m-3" style="opacity:.8">
            <h4 class="card-title text-center"> ${item.name} </h4>
            <div class="card-content">
                <span style="text-decoration:underline">Population: </span>${item.population}<br>
                <span style="text-decoration:underline">Climate: </span>${item.climate}<br>
                <span style="text-decoration:underline">Diameter: </span>${item.diameter}<br>
                <span style="text-decoration:underline">Gravity: </span>${item.gravity}<br>


            </div>
        </div>
        `
        })
    }
    results.innerHTML = output;
};

// event listener for the buttons
document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());
});


