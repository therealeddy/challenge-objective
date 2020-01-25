export const formatTrim = (str, tam) => {
  if (str.length >= tam) {
    return str.substr(0, tam).concat('...');
  }

  return str;
};
