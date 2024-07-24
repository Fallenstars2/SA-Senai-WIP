document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('PetsAchadosForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const id = Date.now();
        // const cpf = document.getElementById('cpf').value; // id do usuario logado
        const nomePet = document.getElementById('nomePet').value;
        const especiePet = document.getElementById('especiePet').value;
        const racaPet = document.getElementById('racaPet').value;
        const portePet = document.getElementById('portePet').value;
        const corPet = document.getElementById('corPet').value;
        const generoPet = document.getElementById('generoPet').value;
        const pelagemPet = document.getElementById('pelagemPet').value;
        /foto/
        const comentarioPet = document.getElementById('comentarioPet').value;

        const petAchado = { id, nomePet, especiePet, racaPet, portePet, corPet, generoPet, pelagemPet, /foto,/ comentarioPet, /cadastroEncontradosRadio/ };

        let petsAchados = JSON.parse(localStorage.getItem('petsAchados')) || [];
        petsAchados.push(petAchado);
        localStorage.setItem('petsAchados', JSON.stringify(petsAchados));
        alert('Pet cadastrado com sucesso!');
        form.reset();
    });
});

function voltar() {
    window.location.href = 'home.html'
}

// function verMais() {



// }
function mostrarTodos() {

    encontreiFeed.innerHTML = ''
    const petsAchados = JSON.parse(localStorage.getItem('petsAchados')) || [];

        for (i = 0; i < petsAchados.length; i++) {
        encontreiFeed.innerHTML +=
            '<div class="card">' +
            '<h2>' + petsAchados[i].nomePet + '</h2>' +
            '<p>' + petsAchados[i].especiePet + '</p>' +
            '<p>' + petsAchados[i].racaPet + '</p>' +
            <button onclick="mostrarMais(${petsAchados[i].id})">Mostrar detalhes</button>
            '<div>'
    }
}

mostrarTodos()

function mostrarMais(){
    alert('lalalalla') // botao funciona mas trocar para um modal
}