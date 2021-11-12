const add = (a, b) => {
  if (isNaN(a) || isNaN(b)) return false;

  if (Number.isInteger(a) || Number.isInteger(b)) {
    return parseFloat(a) + parseFloat(b);
  }

  return parseInt(a) + parseInt(b);
};

const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

module.exports = {
  add,
  sub,
  mul,
  div,
};
