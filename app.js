const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.redirect('/api/whoami');
});


app.get('/api/whoami', (req, res) => {
    const data = {
        'ipaddress': req.connection.remoteAddress
    };
    res.json(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));