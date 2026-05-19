    let dados = "Alice-22,Fen-31,Agetha-19";

    let pessoas = dados.split(",");

    function add() {

      const ul = document.getElementById("lista");

      ul.innerHTML = "";

      for (let i = 0; i < pessoas.length; i++) {

        const info = pessoas[i].split("-");

        const nome = info[0];
        const idade = Number(info[1]);

        const li = document.createElement("li");

        li.textContent = `${nome} tem ${idade} anos`;

        ul.appendChild(li);
      }
    }

    function analisar() {
      pessoas.sort((a, b) => {
        const nomeA = a.split("-")[0].toLowerCase();
        const nomeB = b.split("-")[0].toLowerCase();
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
      });

      add();
    }
  