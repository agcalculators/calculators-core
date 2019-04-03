function formatNumber(num, precision) {

    if (`${num}`.indexOf('.') === -1) {
        return parseFloat(parseFloat(num).toFixed(precision || 0));
    }
    return parseFloat(parseFloat(num).toFixed(precision || 0))
}

function formatCurrency(num, symbol = '$') {
    return `${symbol}${parseFloat(num).toFixed(2)}`
}

function isNumber(val) {
    return !isNaN(parseFloat(value)) && isFinite(value)
}

function isInteger(val) {
    return isNumber(val) && (val % 1 === 0)
}

function between(val, beginRange, endRange) {
    return isNumber(val) && isNumber(beginRange) && isNumber(endRange) && val >= beginRange && val <= endRange
}

function oneOf(val, options) {
    return isNumber(val) && options && options.indexOf(val) !== -1
}

function isEmpty(val) {
    if (typeof val === 'string') {
        return val === '';
    } 
    
    for (var key in val) {
        if (val.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

export { between, formatCurrency, formatNumber, isEmpty, isInteger, isNumber, oneOf };
