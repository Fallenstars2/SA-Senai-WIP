document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('AnimalForm');
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

        const pet = { id, /cpf,/ nomePet, especiePet, racaPet, portePet, corPet, generoPet, pelagemPet, /foto,/ comentarioPet};

        // pet.push()
        let pets = JSON.parse(localStorage.getItem('pets')) || [];
        pets.push(pet);
        localStorage.setItem('pets', JSON.stringify(pets));
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
    const pets = JSON.parse(localStorage.getItem('pets')) || [];

        for (i = 0; i < pets.length; i++) {
        perdiFeed.innerHTML +=
            '<div class="card">' +
            '<h2>' + pets[i].nomePet + '</h2>' +
            '<p>' + pets[i].especiePet + '</p>' +
            '<p>' + pets[i].racaPet + '</p>' +
            <button onclick="mostrarMais(${pets[i].id})">Mostrar detalhes</button>
            '<div>'
    }
}

mostrarTodos()

function mostrarMais(){
    alert('lalalalla') // botao funciona mas trocar para um modal
}