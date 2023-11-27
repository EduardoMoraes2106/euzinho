const turista = prompt('E ai , turista qual é seu nome?')

let cidades = ""
let contagem = 0

let visitas = prompt('Voce ja visitou alguma cidade? (Sim / Não)')

while(visitas === "Sim" || visitas === "sim") {
    let cidade = prompt('Qual o nome da cidade visitada?')

    cidades += "-" + cidade + "\n"
    contagem++

    visitas = prompt('Voce ja viajou para outra cidade? (Sim / Não)')
}

alert(
    "Turista:=>" + turista + "\n Cidades visitadas: \n" + cidades
)