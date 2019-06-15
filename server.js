const express = require('express');
const app = express ();


app.get('/', (req, res) =>{
  res.send("Hello");
});

app.get('/contact' ,(req, res) =>{
  res.send('contact');
});

app.get('/about', (req, res) =>{
  res.send('Hello I am Leke, a future fullstack developer')
});

app.listen(5000, () => {
console.log("Server is running @ port 5000");
});