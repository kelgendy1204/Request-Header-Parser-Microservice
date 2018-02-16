const express = require('express');
const app = express();
const requestIp = require('request-ip');

app.use(requestIp.mw());

app.get('/', (req, res) => {
    res.redirect('/api/whoami');
});

app.get('/api/whoami', (req, res) => {
    const ipaddress = req.clientIp;
    const data = {
        ipaddress
    };
    res.json(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));