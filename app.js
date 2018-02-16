const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.redirect('/api/whoami');
});


app.get('/api/whoami', (req, res) => {
    var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const data = {
        ipaddress
    };
    res.json(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));