import { isEmpty } from './type-utils';

export function validate(str, validators, params, resultSet) {

    if (!Array.isArray(validators)) {
        if (typeof validators === 'string') {
            validators = [validators];
        } else {
            throw new Error('Validators should be a string or array.');
        }
    }

    var isDefined = typeof str !== 'undefined';

    var errors = validators.reduce(function(arr, current) {    
        switch(current) {
            case 'required':
                if (!str) {
                    arr['required'] = true;
                }
                break;
            case 'pattern':
                var pattern = params && params.patter;
                if (!pattern || new RegExp(pattern).test(str) === false) {
                    arr['pattern'] = true;
                }
                break;
            case 'number':
                if (!isDefined || isNaN(str)) {
                    arr['number'] = true;
                }
                break;
            case 'date':
                if (!isDefined) {
                    arr['date'] = true;
                }
                if (!str instanceof Date) {
                    var timestamp = Date.parse(str);
                    if (isNaN(timestamp)) {
                        arr['date'] = true;
                    }
                }
                break;
            case 'min':
                if (isDefined && !isNaN(str)) {
                    if (parseFloat(str) < parseFloat(params && params['min'] || '0')) {
                        arr['min'] = true;
                    }
                }
                break;
            case 'max':
                if (isDefined && !isNaN(str)) {
                    if (parseFloat(str) > parseFloat(params && params['max'] || '0')) {
                        arr['max'] = true;
                    }
                }
                break;
            case 'gt':
                if(isDefined) {
                    var val = resultSet && resultSet[params && params['gt']];
                    if (!val || parseFloat(val) > parseFloat(str)) {
                        arr['gt'] = true;
                    }
                }
                break;
            case 'lt':
                if (isDefined) {
                    var val = resultSet && resultSet[params && params['lt']];
                    if (!val || parseFloat(val) < parseFloat(str)) {
                        arr['lt'] = true;
                    }
                }
                break;
            case 'not':
                if (isDefined) {
                    var val = resultSet && resultSet[params && params['not']];
                    if (val === str) {
                        arr['not'] = true;
                    }
                }
                break;
            case 'oneOf': 
                if (isDefined) {
                    var optionsArr = params && params['oneOf'];
                    if (typeof optionsArr === 'string') {
                        optionsArr = optionsArr.split(',');
                    }
                    if ('indexOf' in optionsArr && optionsArr.indexOf(str) === -1) {
                        arr['oneOf'] = true;
                    }
                }
                break;

        }
        return arr;
    }, {});

    return errors;
}
