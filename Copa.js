function CopaLibertadores(nome, time, titulos) {
    this.nome = nome;
    this.time = time;
    this.titulos = titulos;
}

function SaoPaulo(nome, time, titulos, pais) {
    CopaLibertadores.call(this, nome, time, titulos);
    this.pais = pais;
}

function RiverPrate(nome, time, titulos, PrincipalJogador) {
    CopaLibertadores.call(this, nome, time, titulos);
    this.PrincipalJogador = PrincipalJogador;
}

function Flamengo(nome, time, titulos, Grupo) {
    CopaLibertadores.call(this, nome, time, titulos);
    this.Grupo = Grupo;
}


const SaoPaulo = new SaoPaulo("SaoPaulo", 92, 93, 94, 2005);
const RiverPrate = new RiverPrate("Riverprate", 89, 2008, 2012);
const Flamengo = new Flamengo("Flamnego", 81, 2022 );

console.log(SaoPaulo);
console.log(RiverPrate);
console.log(Flamengo);
