//  CsvController(){
//
// }
//
// module.exports = CsvController
// module.exports = {}

let fs = require('fs');
const fastCsv = require('fast-csv');

class CsvController {

    static readCsv() {
        let stream = fs.createReadStream('logs/example1.csv');
        fastCsv
            .fromStream(stream, { headers: true })
            .on('data', function (data) {
                console.log(data);
            })
            .on('end', function () {
                console.log('done');
            });
        // let fileStream = fs.createReadStream("logs/example1.csv"),
        //     parser = fastCsv();
        //
        // fileStream
        //     .on("readable", function () {
        //         let data;
        //         while ((data = fileStream.read()) !== null) {
        //             parser.write(data);
        //         }
        //     })
        //     .on("end", function () {
        //         parser.end();
        //     });
        //
        // parser
        //     .on("readable", function () {
        //         let data;
        //         while ((data = parser.read()) !== null) {
        //             console.log(data);
        //         }
        //     })
        //     .on("end", function () {
        //         console.log("done");
        //     });

    }
}

module.exports = CsvController;
