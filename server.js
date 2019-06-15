const express = require('express');
const app = express ();


app.get('/', (req, res) =>{
  res.send("<h1> Hello ! Welcome to Node js with express framework</h1>");
});

app.get('/contact' ,(req, res) =>{
  res.send('you can reach me at lekesmile1@gmail.com');
});

app.get('/about', (req, res) =>{
  res.send('Hello I am Leke, a future fullstack developer')
});

app.listen(5000, () => {
console.log("Server is running @ port 5000");
});