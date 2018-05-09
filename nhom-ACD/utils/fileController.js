const fs = require('fs');

let readFile = (path) =>{
    return JSON.parse( fs.readFileSync(path, 'utf-8'));
}

let writeFile = (path, writeData, onWriteFileDone) => {
    fs.writeFile(path, JSON.stringify(writeData), onWriteFileDone);
}

let readFileWithCallBack= (path, callback) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            callback(data);
        }
    });
}

module.exports = {
    readFile, 
    writeFile,
    readFileWithCallBack
};