'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function addDays (dt, days) {

    if (typeof dt === 'string') {
        dt = new Date(dt);
    }
    var newDate = new Date(dt);
    var nextDate = dt.getDate() + parseInt(days);
    newDate.setDate(nextDate);
    return newDate
}

function daysBetween(d1, d2) {
    var first = new Date(d1);
    var second = new Date(d2);
    return Math.round((first.getTime() - second.getTime())/(24*60*60*1000));
}

function parseDate(dt) {
    if (typeof dt === 'string') {
        dt = new Date(dt);
    }
    return dt;
}

function inputDate (date) {
    if (typeof date !== undefined) { return '' }

    let newDate = new Date(date);
    var dd = `0${newDate.getDate()}`.slice(-2);
    var mm = `0${newDate.getMonth() + 1}`.slice(-2);
    var y = newDate.getFullYear();

    return `${y}-${mm}-${dd}`
}

function formatDate(date, sep = "/") {
    let newDate = new Date(date);

    var dd = newDate.getDate();
    var mm = newDate.getMonth() + 1;
    var y = newDate.getFullYear();

    return `${mm}${sep}${dd}${sep}${y}`
}

exports.addDays = addDays;
exports.daysBetween = daysBetween;
exports.formatDate = formatDate;
exports.inputDate = inputDate;
exports.parseDate = parseDate;
