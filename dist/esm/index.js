export { addDays, daysBetween, formatDate, inputDate, parseDate } from './dates.js';
export { between, formatCurrency, formatNumber, isEmpty, isInteger, isNumber, oneOf } from './types.js';
export { validate } from './forms.js';

function polyfillMatches() {
    // matches polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
}

function nextSibling(elem, selector) {
    
    polyfillMatches();

    var sibling = elem.nextElementSibling;
    if (!selector) return sibling;

    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling;
    }

    return null;
}

function nextSiblingUntil(elem, selector, filter) {

    polyfillMatches();

    var siblings = [];
    elem = elem.nextElementSibling;

    while (elem) {
        if (elem.matches(selector)) {
            break;
        }

        if (filter && !elem.matches(filter)) {
            elem = elem.nextElementSibling;
            continue;
        }

        siblings.push(elem);

        elem = elem.nextElementSibling;
    }

    return siblings;
}

export { nextSibling, nextSiblingUntil };
