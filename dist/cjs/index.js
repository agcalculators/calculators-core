'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dates = require('./dates.js');
var types = require('./types.js');
var forms = require('./forms.js');

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

exports.addDays = dates.addDays;
exports.daysBetween = dates.daysBetween;
exports.formatDate = dates.formatDate;
exports.inputDate = dates.inputDate;
exports.parseDate = dates.parseDate;
exports.between = types.between;
exports.formatCurrency = types.formatCurrency;
exports.formatNumber = types.formatNumber;
exports.isEmpty = types.isEmpty;
exports.isInteger = types.isInteger;
exports.isNumber = types.isNumber;
exports.oneOf = types.oneOf;
exports.validate = forms.validate;
exports.nextSibling = nextSibling;
exports.nextSiblingUntil = nextSiblingUntil;
