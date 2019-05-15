const express = require('express');
const os = require('os');

const app = express();
const CsvController = require('./controller/csv/CsvController');
const FileSystemController = require('./controller/filesystem/FileSystemController');
const VideoController = require('./controller/video/VideoController');

app.use(express.static('dist'));
app.get('/api/get_user_name', (req, res) => {
    res.send({ username: os.userInfo().username });
});

app.get('/api/run_on_csv', (req, res) => {
    CsvController.readCsv();
    res.setHeader('Content-Type', 'application/json');
    res.send({ username: os.userInfo().username });
    // res.send(JSON.stringify({ greeting: `Hello ${'test'}!` }));
});

app.get('/api/create_dir', (req, res) => {
    FileSystemController.createLib(req.query.rows, req.query.columns);
    // res.setHeader('Content-Type', 'application/json');
    res.send({ });
    // res.send(JSON.stringify({ greeting: `Hello ${'test'}!` }));
});

app.get('/api/cut_video', (req, res) => {
    VideoController.cutVideo();
    res.send({ });
    // res.setHeader('Content-Type', 'application/json');
    // res.send({ username: os.userInfo().username });
    // res.send(JSON.stringify({ greeting: `Hello ${'test'}!` }));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
