module.exports = {
  run() {
    const object = {
      nome: "Carlos",
      sobrenome: "Santos",
      idade: 25,
      peso: 55,
      cidade: "Volta Redonda",
      UF: "RJ",
    };

    for (key in object) {
      console.log(`${key}: ${object[key]}`);
    }
  },
};
