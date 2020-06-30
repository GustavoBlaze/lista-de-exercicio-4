module.exports = {
  run() {
    let i = 0;
    while (i <= 100) {
      console.log(`${i} é ${i % 2 === 0 ? "par" : "impar"}`);
      i++;
    }
  },
};
