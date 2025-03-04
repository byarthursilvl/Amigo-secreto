let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo');

    if (nome.value.trim() == '') {
        alert('Insira um nome.');
    } else {
        amigos.push(nome.value);
        nome.value = '';

        atualizarLista();
    }
}

function atualizarLista() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';

    for (i = 0; i < amigos.length; i++) {
        let nome = document.createElement('li');

        nome.innerHTML = amigos[i];
        listaDeAmigos.append(nome);
    }
}

function sortearAmigo() {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    if (amigos.length < 1) {
        alert("Insira pelo menos um nome para sortear!")
    } else {
        document.getElementById("resultado").innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
        amigos.splice(indiceAleatorio, 1);
    }

    atualizarLista();
}
