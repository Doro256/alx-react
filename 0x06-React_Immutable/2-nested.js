import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const ObjVal = fromJS(object);

  return ObjVal.getIn(array, undefined);
}
