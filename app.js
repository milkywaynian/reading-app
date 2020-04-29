const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });

app.get('/', (req, res) => {
    console.log("Hello Maryna");
    res.send('Hello World!')
  });


  app.get('/search/:title', (req, res) => {
    const titleSearch = req.params.title;
    // const foundBooks = bookFetcher.searchForTitle(titleSearch);
    const foundBooks = {
        'title': 'Cheese and Punishment',
        'author': 'Ronald McDonald',
        'genre': 'Cook book'
    }
    res.send(foundBooks);
  });

