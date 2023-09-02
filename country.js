// const countyApiF =  () => {
//     fetch('https://restcountries.com/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountryF(data))
// }
// countyApiF()


// const displayCountryF = (allCountry) =>{
//     const countyContainer  = document.getElementById('all-country');
    
//     allCountry.forEach(county =>{
//         // console.log(county);
//         const div = document.createElement('div');
//         div.classList.add('country');
//         const{name}=county
//         div.innerHTML = 
//         `
//          <h3>Country Name: ${county.name}</h3>
//          <p>Capital : ${county.capital}</p>
//          <button onclick="detailsHandelar('${name}')">Details</button>
//         `
//         countyContainer.appendChild(div);
        
//     })
// }

// const detailsHandelar = (countryData) =>{
//     const url = `https://restcountries.com/v2/name/${countryData}`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displayHandelarData(data[0]))
// }


// const displayHandelarData = (countryData) => {
//     console.log(countryData)
//     const showData =document.getElementById('details');
//     showData.innerHTML = 
//     `<h3> ${countryData.name} </h3>
//     <img width="150px" src="${countryData.flag}">
//     `
// }


// all country api
function allCountryApiF () {
    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then(data => displayAllCountryF(data))
}
allCountryApiF();

// display all country
const displayAllCountryF = (allCountry) =>{
    const allCountryContainer = document.getElementById('all-country');
    
    allCountry.forEach((country) =>{
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h2>Country Name : ${country.name}</h2>
        <p>capital : ${country.capital}</p>
        <button onclick="detailsHandelar('${country.name}')">Detils</button>
        `
        allCountryContainer.appendChild(div);
    })
}

// button handelar
const detailsHandelar= (eachCountry) =>{
    const url = `https://restcountries.com/v2/name/${eachCountry}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
        const country = data[0];
        console.log(country)
        const countryDisplay = document.getElementById('details');
        countryDisplay.innerHTML = `
        <h4>${country.name}</h4>
        <img  src="${country.flag}">
        `
    })
}


// const deatilsHandelar = (CountryName) =>{
//     const detailsContainer = document.getElementById('details');
//     const url = `https://restcountries.com/v2/name/${CountryName}`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//          const countryData = data[0];
//          console.log(countryData);
//          detailsContainer.innerHTML =`
//           <h5>${countryData.name}</h5>
//           <img src="${countryData.flag}">
//          `
//     })
// }
