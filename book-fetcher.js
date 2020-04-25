const fetch = require ('node-fetch');
require('dotenv').config(); 
console.log("Script run");
const books = require('google-books-search');
// request a book title and get a jSon response from google books API 

fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// const options = {
//     key: process.env.KEY 
// };

// const api_key = process.env.API_KEY;

// const options = {
//     key: api_key
// };

//How to convert to a promise?
// books.search('Professional JavaScript for Web Developers', options,  function(error, results) {
//     if ( ! error ) {
//         console.log(results);
//     } else {
//         console.log(error);
//     }
// });



//   fetch('placeholder_API_key')
//     .then(res => res.json())
//     .then(json => {
//         return {
//             day: json.SiteRep.DV.Location.Period[0].Rep[0],
//             night: json.SiteRep.DV.Location.Period[0].Rep[1]
//         }
//         })
//     .then(json => {
//         return {
//             day: convertToHumanReadable(json.day),
//             night: convertToHumanReadable(json.night),
//         }
//     })
//     .then(readable => console.log(readable));