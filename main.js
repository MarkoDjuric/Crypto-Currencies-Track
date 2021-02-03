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
let myVar;
const ul = document.getElementById('root')
let hashinRoot = false;
const contentDiv = document.getElementById("app")
const element = document.getElementsByClassName("hidden")[0];

// Creating function to fecth data
async function getData(url, qString) {
   
  let response = await fetch(url + qString);
  let data = await response.json();
  return data
}

getData(url, qString).then(data => {

    console.log(data)
    currencies = data;

      // Get first tree names of cryptos
      listedData = currencies['data'].slice(0,3);

  
        // Creating paragraphs with names of first tree cryptocurrencies
        setTimeout(() => {
          paragraphs.forEach( (elem, idx) => {
            // Creating <a href= ""> 
            let a = document.createElement('a')
            let crypto = listedData[idx]['name']
            a.setAttribute("href","#"+crypto+"")
            a.textContent = listedData[idx]['name']
            // elem.textContent = listedData[idx]['name']
              elem.insertAdjacentElement('afterbegin',a)  

              elem.addEventListener('click', cryptoDetails => {
                
showLoader()
             getDetailData(url_2).then(data=> {
               console.log(data)
               setTimeout(() => {
               hideLoader()
               },2000)
               
             })
            
           console.log(element)
           
          
          })   
         
        });
hideLoader()
        },3000)


       

})
     
function getContent(fragmentId, callback){

  let pages = {
    Bitcoin: 'bitcoin',
    Ethereum: "ethereum",
    Tether: "tether"
  };

  callback(pages[fragmentId]);
}

function loadContent(){

  fragmentId = location.hash.substr(1);
  console.log(fragmentId)

  getContent(fragmentId, function (content) {
  contentDiv.innerHTML = content;

});
}

if(!location.hash) {

  location.hash = "#root";

}

loadContent()

window.addEventListener("hashchange",  () => {
  
  console.log(routeTracker)

  
  if(location.hash === '#root'){
    ul.style.display = 'block'
    contentDiv.style.display = 'none'
  
  }else if(location.hash !== '#root'){
    contentDiv.style.display = 'block'
    ul.style.display = 'none'
    loadContent()
  }
  
})

  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
   
    console.log(hashinRoot = true) 
    let lokacija = location.hash
    console.log(lokacija)
    if(lokacija === '#root') {
      console.log('jeste root')
      // window.location.href = lokacija
      // document.body.innerHTML = '<div id="root"><h1>aasdasd</h1> </div>'
      location.hash = "#root";
      contentDiv.style.display = 'none'
      console.log(ul)
     }else {
      console.log('nije root')
      console.log(lokacija)
      console.log(window.location.href = lokacija)
      ul.style.display = 'none'
    }
