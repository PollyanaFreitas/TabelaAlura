var polly = {
  nome: "Polly",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var ju = {
  nome: "Ju",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var lucas = {
  nome: "Lucas",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();
function exibirNaTela() {
  elementoTabela.innerHTML = `     
        <tr>
        <td>${polly.nome}</td>
        <td>${polly.vitoria}</td>
        <td>${polly.empate}</td>
        <td>${polly.derrota}</td>
        <td>${polly.pontos}</td>
        <td><button onClick="adicionarVitoria(polly)">Vitoria</button></td>
        <td><button onClick="adicionarEmpate(polly)">Empate</button></td>
        <td><button onClick="adicionarDerrota(polly)">Derrota</button></td>
        </tr> 

        <tr>
        <td>${ju.nome}</td>
        <td>${ju.vitoria}</td>
        <td>${ju.empate}</td>
        <td>${ju.derrota}</td>
        <td>${ju.pontos}</td>
        <td><button onClick="adicionarVitoria(ju)">Vitoria</button></td>
        <td><button onClick="adicionarEmpate(ju)">Empate</button></td>
        <td><button onClick="adicionarDerrota(ju)">Derrota</button></td>
        </tr>
        
        
         <tr>
        <td>${lucas.nome}</td>
        <td>${lucas.vitoria}</td>
        <td>${lucas.empate}</td>
        <td>${lucas.derrota}</td>
        <td>${lucas.pontos}</td>
        <td><button onClick="adicionarVitoria(lucas)">Vitoria</button></td>
        <td><button onClick="adicionarEmpate(lucas)">Empate</button></td>
        <td><button onClick="adicionarDerrota(lucas)">Derrota</button></td>
      
      </tr> `;
}
function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}
function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos = jogador.pontos + 1;
  exibirNaTela();
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}
