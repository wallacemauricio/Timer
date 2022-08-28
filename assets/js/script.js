function relogio() {
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer;

  function criaSegundos(segundos) {
    let hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  function mostraHora() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaSegundos(segundos);
    }, 1000);
  }

  iniciar.addEventListener("click", function (e) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciar.innerHTML = 'Iniciar'
    mostraHora();
  });

  pausar.addEventListener("click", function (e) {
    clearInterval(timer);
    if (segundos > 0) {
      relogio.classList.add("pausado");
    }
    if (segundos > 0) {
      iniciar.innerHTML = 'continuar'
    }
  });

  zerar.addEventListener("click", function (e) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    iniciar.innerHTML = 'Iniciar'
    relogio.classList.remove("pausado");
    segundos = 0;
  });
}

relogio();
