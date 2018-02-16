const express = require('express');
const app = express();
const requestIp = require('request-ip');
var useragent = require('express-useragent');

app.use(requestIp.mw());
app.use(useragent.express());

app.get('/', (req, res) => {
    res.redirect('/api/whoami');
});

app.get('/api/whoami', (req, res) => {
    const ipaddress = req.clientIp;
    const language = req.headers['accept-language'];
    const software = req.useragent.os;
    const data = {
        ipaddress,
        language,
        software
    };
    res.json(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));