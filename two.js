module.exports = {
  run() {
    const array = [9, 3, 8, 9, 10];
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    const media = soma / array.length;
    console.log(`A media dos numeros 9, 3, 8, 9, 10 é ${media}`);
  },
};
