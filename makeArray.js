module.exports = n => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(parseInt(Math.random() * 10000));
  }
  return array;
};