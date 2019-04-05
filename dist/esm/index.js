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

const create = (channel = "redom") => {
    const dispatch = (target, type, data) => {
      const event = new window.CustomEvent(channel, {
        bubbles: true,
        detail: {
          type,
          data
        }
      });
      const el = target.el || target;
  
      el.dispatchEvent(event);
    };
  
    const listen = (target, handlers) => {
      const el = target.el || target;
  
      const handler = e => {
        const { type, data } = e.detail;
  
        handlers[type] && handlers[type](data);
      };
  
      el.addEventListener(channel, handler);
  
      return {
        destroy() {
          el.removeEventListener(channel, handler);
        }
      };
    };
  
    return {
        dispatch,
        listen
    }
  };

export { create as createDispatcher, nextSibling, nextSiblingUntil };
