//lo que sucede detras del funcionamiento del fetch 

const fs = require('fs');

function read(pathfile) {
  return new Promise(function(resolve, reject) {
    fs.readFile(pathfile, 'UTF-8', (err, data) => {
      if (err) {
        return reject
      }

      console.log(data);
      resolve()
    })
  })
}


read('C:/Users/jhona/ Desktop/Dom_hpt5/Dom_hpt5_7/test.txt')
