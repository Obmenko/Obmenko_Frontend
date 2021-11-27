/* eslint-disable import/prefer-default-export */
export const formatPhoneToMask = (value: string): string => {
  const isNumberExists = (value: string | undefined) => (value !== undefined ? value : '_');
  let v = value.replace(/[\D]*/g, '').slice(0, 11);
  if (v.match(/^[78]/)) {
    v = v.replace(/^[78]/, '+7');
  } else if (v.length) v = `+7${v}`;

  const formattedNumber = `+7(${isNumberExists(v[2])}${isNumberExists(v[3])}${isNumberExists(v[4])})-${isNumberExists(v[5])}${isNumberExists(v[6])}${isNumberExists(v[7])}-${isNumberExists(v[8])}${isNumberExists(v[9])}-${isNumberExists(v[10])}${isNumberExists(v[11])}`;
  return v.length ? formattedNumber : '';
};
