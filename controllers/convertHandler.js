/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
function numberSplitter(input) {
  let number = input.match(/[.\d\/]+/g)|| ['1'];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], string];
}

const inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {

  this.getNum = function (input) {
    let result;
    result = input.match(inputRegex)[0]
    
    // check if no number supplied, insert 1
    const numRegex = /\d/
    if (numRegex.test(result) === false) {
      result = 1
    }

    // check if fraction, make sure only one slash or fail
    // divide fraction and return result
    if (result.toString().includes('/')) {
      let values = result.toString().split('/')
      if (values.length != 2) {
        return null
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0]/values[1]).toFixed(5))
      }

    // if not a valid number fail
    if (isNaN(result)) return null;

    return result;
  };

  this.getUnit = function (input) {
    let result;
    result = numberSplitter(input)[1].toLowerCase();

    if (!result) {
      result = input.match(inputRegex[0])
    }

    switch (result) {
      case 'km':
        return 'km';
        break;
      case 'mi':
        return 'mi';
        break;
      case 'lbs':
        return 'lbs';
        break;
      case 'kg':
        return 'kg';
        break;
      case 'l':
        return 'L';
        break;
      case 'gal':
        return 'gal';
        break;
      default:
        return undefined;
        break;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();

    switch (unit) {
      case 'km':
        return 'mi';
        break;
      case 'mi':
        return 'km';
        break;
      case 'lbs':
        return 'kg';
        break;
      case 'kg':
        return 'lbs';
        break;
      case 'l':
        return 'gal';
        break;
      case 'gal':
        return 'L';
        break;
      default:
        return undefined;
        break;
    }
  };

  this.spellOutUnit = function (unit) {
    let name = unit.toLowerCase();

    switch (name) {
      case 'km':
        return 'kilometers';
        break;
      case 'mi':
        return 'miles';
        break;
      case 'lbs':
        return 'pounds';
        break;
      case 'kg':
        return 'kilograms';
        break;
      case 'l':
        return 'liters';
        break;
      case 'gal':
        return 'gallons';
        break;
      default:
        return null;
        break;
    }
  };

  this.convert = function (initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const conversion = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg,
    };

    result = Math.round(initNum * conversion[initUnit.toLowerCase()] * 10 ** 5) / 10 ** 5;
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
