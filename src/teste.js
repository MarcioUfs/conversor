const fs = require('fs');
// const myArq = fs.open('C:/dev/conversor/src/PORTAL  PMSE  Listar Antiguidade peq.csv');
const posts = [{ id: 1, valor: 'um ggggg' }]
fs.writeFileSync('./src/myCsv.csv', JSON.stringify(posts), {encoding:"utf-8"});