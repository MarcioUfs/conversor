const readline = require('readline');
const fs = require('fs');
const path = require("path");
// const neatCsv = require('neat-csv');
const readable = fs.createReadStream('C:/dev/conversor/src/PORTAL  PMSE  Listar Antiguidade peq.csv');
// const readable = fs.createReadStream('C:/dev/conversor/src/PORTAL  PMSE  Listar Antiguidade.csv');
// const arrayAntiguidade = ["CEL", "TC", "MAJ", "CAP", "1º TEN", "2º TEN", "ASP", "CAD 1º", "ST", "1º SGT", "2º SGT", "3º SGT", "CB", "SD 1ª CL", "SD 2ª CL", "SD 3ª CL", "SD AL", "SD"];
let arrJson = [];
const rl = readline.createInterface({
    input: readable,
    output: process.stdout
})
rl.on('line', (line) => {
    const splitLine = line.split(',')
    let matriculaAntiguidade = String(splitLine[3]);
    let nomeAntiguidade = splitLine[4];
    let patenteAntiguidade = '';
    const saidaNome = splitLine[1].replaceAll(/[ªº"]/g, '').split(' ')
    if (saidaNome.length === 1 && saidaNome[0] !== "Patente") {
        patenteAntiguidade = saidaNome[0]
    }
    if ((saidaNome[0] === "1" || saidaNome[0] === "2") && saidaNome[1] === "TEN") {
        patenteAntiguidade = `${saidaNome[0]}${saidaNome[1]}`
    }
    if (saidaNome[0] === "CAD") {
        patenteAntiguidade = saidaNome[0]
    }
    if (saidaNome[0] === "1" && saidaNome[1] === "SGT") {
        patenteAntiguidade = `${saidaNome[0]}${saidaNome[1]}`
    }
    if (saidaNome[0] === "2" && saidaNome[1] === "SGT") {
        patenteAntiguidade = `${saidaNome[0]}${saidaNome[1]}`
    }
    if (saidaNome[0] === "3" && saidaNome[1] === "SGT") {
        patenteAntiguidade = `${saidaNome[0]}${saidaNome[1]}`
    }
    if (saidaNome[0] === "SD" && saidaNome[1] === "AL") {
        patenteAntiguidade = `${saidaNome[0]}${saidaNome[1]}`
        // console.log(saidaNome)
    }
    if (saidaNome[0] === "SD" && saidaNome[1] !== "AL" && saidaNome.length >= 2) {
        patenteAntiguidade = saidaNome[0]
    }
    arrJson.push(JSON.parse(`{"valor":"${splitLine[0]}","matriculaAntiguidade":"${String(Number(matriculaAntiguidade.slice(2, 10)))}",
        "patenteAntiguidade":"${patenteAntiguidade}",
        "nomeAntiguidade":"${nomeAntiguidade}"}`)
    )
    saida(arrJson)
    rl.close();
    // console.log(String(Number(matriculaAntiguidade.slice(2,10))),patenteAntiguidade,nomeAntiguidade)
})
async function saida(arrJson) {
    let recebe = await arrJson
    return recebe
}
console.log(arrJson)
// �