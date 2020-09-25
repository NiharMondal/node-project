const express = require('express');

const app = express();
const rootCall =(req, res)=>res.send('Thank you for calling me')
app.get('/', rootCall)

app.listen(3000, ()=> console.log('Listening to port 3000'))