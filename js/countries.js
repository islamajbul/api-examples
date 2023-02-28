const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    // for( const country of countries){
    //     console.log(country);
    // }
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No capital'} </p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
        console.log(country.cca2);
    });   
}

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));

}

const showCountryDetails = country =>{
   const detailContainer = document.getElementById('country-details')
   detailContainer.innerHTML = `
   <h2>Country Details</h2>
   <h3>Name: ${country.name.common}</h3>
   <p>Capital: ${country.capital[0]} </p>
   <img src="${country.flags.png}">
   `
}

loadCountries();