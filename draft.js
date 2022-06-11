// #1

const cities = [
  'Москва',
  'Санкт-Петербург',
  'Воронеж',
];

const stringifyCities = (arr) => `${arr.join(', ')}.`;

console.log(stringifyCities(cities));


// #2

const roundToN = (n, precision = 5) => Math.round(n / precision) * precision;

console.log(roundToN(27));
console.log(roundToN(27.8));
console.log(roundToN(41.7));
console.log(roundToN(0));
console.log(roundToN(99.99));


// #3

const getComputerWordForm = (q = 1) => {
  const wordForms = [
    'компьютер',
    'компьютера',
    'компьютеров',
  ];

  const modQ = Math.round(q);

  if (modQ % 100 >= 11 && modQ % 100 <= 14 || modQ % 10 === 0 ||modQ % 10 >= 5) {
    return `${modQ} ${wordForms[2]}`;
  }

  if (modQ % 10 === 1) {
    return `${modQ} ${wordForms[0]}`;
  }

  return `${modQ} ${wordForms[1]}`;
}

console.log(getComputerWordForm(25));
console.log(getComputerWordForm(41));
console.log(getComputerWordForm(1048));
console.log(getComputerWordForm(14));
console.log(getComputerWordForm(24));


// #4

const isSimple = (n) => {
  if (n <= 0) {
    throw new RangeError('Число должно быть положительным');
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(5, isSimple(5));
console.log(6, isSimple(6));
console.log(7, isSimple(7));
console.log(8, isSimple(8));
console.log(9, isSimple(9));
console.log(11, isSimple(11));
console.log(12, isSimple(12));
console.log(13, isSimple(13));

// #5

const doubleDoubles = (master, slave) => {
  const masterDoubles = master.filter((el, i, arr) =>arr.indexOf(el) !== i);
  const slaveDoubles = slave.filter((el, i, arr) =>arr.indexOf(el) !== i);

  return masterDoubles.filter((el) => slaveDoubles.includes(el));
}

console.log(doubleDoubles(
  [7, 17, 1, 9, 1, 17, 56, 56, 23],
  [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
));
console.log(doubleDoubles(
  [3, 5, 3, 6, 2, 7, 2, 5],
  [5, 4, 5, 4, 3, 6, 1, 1, 3, 6, 5]
));
