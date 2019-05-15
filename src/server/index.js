const express = require('express');
const os = require('os');

const app = express();
const CsvController = require('./controller/csv/CsvController');
const FileSystemController = require('./controller/filesystem/FileSystemController');

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => {
    console.log('hi');
    res.send({ username: os.userInfo().username });
});

app.get('/api/runOnCsv', (req, res) => {
    CsvController.readCsv();
    res.setHeader('Content-Type', 'application/json');
    res.send({ username: os.userInfo().username });
    // res.send(JSON.stringify({ greeting: `Hello ${'test'}!` }));
});

app.get('/api/createDir', (req, res) => {
    console.log(req);
    FileSystemController.createLib(req.query.rows, req.query.columns);
    // res.setHeader('Content-Type', 'application/json');
    // res.send({ username: os.userInfo().username });
    // res.send(JSON.stringify({ greeting: `Hello ${'test'}!` }));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
