export function formatNumber(num, precision) {

    if (`${num}`.indexOf('.') === -1) {
        return parseFloat(parseFloat(num).toFixed(precision || 0));
    }
    return parseFloat(parseFloat(num).toFixed(precision || 0))
}

export function formatCurrency(num, symbol = '$') {
    return `${symbol}${parseFloat(num).toFixed(2)}`
}

export function isNumber(val) {
    return !isNaN(parseFloat(value)) && isFinite(value)
}

export function isInteger(val) {
    return isNumber(val) && (val % 1 === 0)
}

export function between(val, beginRange, endRange) {
    return isNumber(val) && isNumber(beginRange) && isNumber(endRange) && val >= beginRange && val <= endRange
}

export function oneOf(val, options) {
    return isNumber(val) && options && options.indexOf(val) !== -1
}

export function isEmpty(val) {
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