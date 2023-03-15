import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    const objVal = fromJS(object);

    return objVal.getIn(array,undefined);
}