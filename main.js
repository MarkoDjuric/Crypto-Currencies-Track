// API key
const apiKey = "14bd8107-0dcf-4aa9-ac06-64e81b1e83a2";
// URL of API data
const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
// Creating complete URL string
const qString = "?CMC_PRO_API_KEY="+apiKey;
// var url_2 = 'https://api.nomics.com/v1/currencies?key=564d806d2d0f0934af84828a58116d74'

// Transform HTML collection into an array
const paragraphs = Array.from(document.getElementsByClassName('valutes'))
// Creating variables to store data
let currencies;
let listedData = '';
const ul = document.getElementById('root')
let hashinRoot = false;
var contentDiv = document.getElementById("app")
const element = document.getElementsByClassName("hidden")[0];
// Fetch API data from https://coinmarketcap.com/api/
fetch(url + qString)
   .then((res) => {

     return res.json();
   })
   .then((data)=> {
     console.log(data)
      currencies = data;
      // Get first tree names of cryptos
      listedData = currencies['data'].slice(0,3);

      // Creating paragraphs with names of first tree cryptocurrencies
      paragraphs.forEach( (elem, idx) => {
               //crate <a href= ""> 
      let a = document.createElement('a')
      let crypto = listedData[idx]['name']
      a.setAttribute("href","#"+crypto+"")
      a.textContent = listedData[idx]['name']
      //   elem.textContent = listedData[idx]['name']
        elem.insertAdjacentElement('afterbegin',a)  
        elem.addEventListener('click', cryptoDetails => {
        
     console.log(element)
     
    
    })   
  });
});
     
