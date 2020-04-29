const fetch = require ('node-fetch');
require('dotenv').config(); 
console.log("Script run");
const books = require('google-books-search');
// request a book title and get a jSon response from google books API 

fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:"harry potter"')
    .then((response) => response.json())
    .then((result) => getTheFirstBook(result))
    .then(nextResult => console.log(nextResult))
    .catch(err => console.log(err));

const getTheFirstBook = result => {
    const firstBook = result.items[1];
    return firstBook;
};



//   .then((response) => response.json())
//   .then(({items:[0]})
//     console.log(items);



  // we need to write a function which would give us useful book data 

  

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