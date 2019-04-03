
function polyfillMatches() {
    // matches polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
}

export function nextSibling(elem, selector) {
    
    polyfillMatches();

    var sibling = elem.nextElementSibling;
    if (!selector) return sibling;

    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling;
    }

    return null;
}

export function nextSiblingUntil(elem, selector, filter) {

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