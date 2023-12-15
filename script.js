// var Bitcoin=document.getElementById("Bitcoin")
// var Ethereum=document.getElementById("Ethereum")
// var Dogecoin=document.getElementById("Dogecoin")



// var settings = {
//     "async":true,
//    "scrossDomain":true,
//    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

//    "method":"GET",
//    "headers":{}

// }
// $.ajax(settings).done(function (response){
//     Bitcoin.innerHTML=response.bitcoin.usd;
//     Ethereum.innerHTML=response.ethereum.usd;
//     Dogecoin.innerHTML=response.dogecoin.usd;


// })
// var Bitcoin = document.getElementById("Bitcoin");
// var Ethereum = document.getElementById("Ethereum");
// var Dogecoin = document.getElementById("Dogecoin");

// var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     Bitcoin.innerHTML = data.bitcoin.usd;
//     Ethereum.innerHTML = data.ethereum.usd;
//     Dogecoin.innerHTML = data.dogecoin.usd;
//   })
//   .catch(error => console.error("Error fetching data:", error));


async function fetchData() {
  try {
    var Bitcoin = document.getElementById("Bitcoin");
    var Ethereum = document.getElementById("Ethereum");
    var Dogecoin = document.getElementById("Dogecoin");

    var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

    const response = await fetch(url);
    const data = await response.json();

    Bitcoin.innerHTML = data.bitcoin.usd;
    Ethereum.innerHTML = data.ethereum.usd;
    Dogecoin.innerHTML = data.dogecoin.usd;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function
fetchData();
