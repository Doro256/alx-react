import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    const objval = fromJS(object);

    return objVal.getIn(array,undefined);
}