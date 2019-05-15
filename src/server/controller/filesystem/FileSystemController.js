//  CsvController(){
//
// }
//
// module.exports = CsvController
// module.exports = {}

let fs = require('fs');

class FileSystemController {

    static createLib(row, column) {
        let baseDir = `Test`;
        FileSystemController.createIfNeeded(baseDir);


        let isoTime = new Date().toISOString();
        let timeDir = `Test/${isoTime}`;
        FileSystemController.createIfNeeded(timeDir);

        let dir = `Test/${isoTime}/${row}_${column}`;
        FileSystemController.createIfNeeded(dir);
    }

    static createIfNeeded(path) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }
    }

}

module.exports = FileSystemController;
