const argv = require('yargs').demandOption('num').argv

const num = String(argv.num);


const Bin2Dec = (binaryNumber) => {

  var decimal = binaryNumber.split('').reverse().reduce(function (acumulated, currentvalue, index) {

    return acumulated += (Math.pow(2, index) * currentvalue);

  }, 0)

  return decimal;
}
console.log(Bin2Dec(num));
