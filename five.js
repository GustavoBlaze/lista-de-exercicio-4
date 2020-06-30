module.exports = {
  run() {
    const media = (nota) => {
      if (nota === 10) console.log(nota, "Sensacional - Parabéns");
      else if (nota >= 7) console.log(nota, "Aprovado");
      else if (nota >= 5) console.log(nota, "Estude um pouco mais. Prova Final");
      else if (nota >= 3.1) console.log(nota, "Prova Final");
      else console.log(nota, "Reprovado");
    };

    media(10)
    media(7)
    media(5)
    media(3.1)
    media(3)
  },
};
