const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const apiUrlType = "https://pokeapi.co/api/v2/type/";
const containerGeral = document.getElementById("container-geral-card");
const inputNome = document.getElementById("input-nome");
const selectedElementos = document.getElementById("select-elementos");
const buttonsurpresa = document.getElementById("button-surpresa");

const tipoPokemonClasses = {
    grass: "pokemon-grass",
    poison: "pokemon-poison",
    normal: "pokemon-normal",
    fire: "pokemon-fire",
    water: "pokemon-water",
    flying: "pokemon-flying",
    fighting: "pokemon-fighting",
    ground: "pokemon-ground",
    rock: "pokemon-rock",
    electric: "pokemon-electric",
    psychic: "pokemon-psychic",
    ice: "pokemon-ice",
    bug: "pokemon-bug",
    ghost: "pokemon-ghost",
    steel: "pokemon-steel",
    dragon: "pokemon-dragon",
    dark: "pokemon-dark",
    fairy: "pokemon-fairy",
};

function criarPokemon(data) {
    const containerCardPokemon = document.createElement("div");
    containerCardPokemon.classList = "Conteiner-card-pokemon";

    const divImagemPokemon = document.createElement("div");
    divImagemPokemon.classList = "imagem-pokemon";

    const imgPokemon = document.createElement("img");
    const divInformacoesPokemon = document.createElement("div");
    divInformacoesPokemon.classList = "descricao-pokemon";

    const numeroPokemon = document.createElement("p");
    numeroPokemon.classList = "numero-pokemon";

    const namePokemon = document.createElement("p");
    namePokemon.classList = "name-pokemon";

    const divTipoPokemon = document.createElement("div");
    divTipoPokemon.classList = "div-tipo-pokemon";

    const tipoPokemon = document.createElement("p");
    tipoPokemon.classList = "type-pokemon";

    const tipoPokemon2 = document.createElement("p");
    tipoPokemon2.classList = "type-pokemon";

    containerCardPokemon.appendChild(divImagemPokemon);
    divImagemPokemon.appendChild(imgPokemon);
    containerCardPokemon.appendChild(divInformacoesPokemon);
    divInformacoesPokemon.appendChild(numeroPokemon);
    divInformacoesPokemon.appendChild(namePokemon);
    divInformacoesPokemon.appendChild(divTipoPokemon);
    divTipoPokemon.appendChild(tipoPokemon);
    divTipoPokemon.appendChild(tipoPokemon2);
    containerGeral.appendChild(containerCardPokemon);

    numeroPokemon.innerHTML = "Nº " + data.order;
    namePokemon.innerHTML = data.name;

    if (data.types.length === 2) {
        tipoPokemon.innerHTML = data.types[0].type.name;
        tipoPokemon2.innerHTML = data.types[1].type.name;
        const tipoNome1 = data.types[0].type.name;
        const tipoNome2 = data.types[1].type.name;
        tipoPokemon.classList = tipoPokemonClasses[tipoNome1];
        tipoPokemon2.classList = tipoPokemonClasses[tipoNome2];
    } else {
        tipoPokemon.innerHTML = data.types[0].type.name;
        const tipoNome = data.types[0].type.name.toLowerCase();
        tipoPokemon.classList = tipoPokemonClasses[tipoNome];
    }

    imgPokemon.src = data.sprites.front_default;
    imgPokemon.style.width = "120px";
    imgPokemon.style.height = "120px";
}

function pegarInformacoesApi(nomeApi) {
    const url = `${apiUrl}${nomeApi}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            criarPokemon(data);
        });
}

inputNome.addEventListener("change", () => {
    const inputValor = inputNome.value.toLowerCase();
    containerGeral.innerHTML = " ";
    pegarInformacoesApi(inputValor);
});

selectedElementos.addEventListener("change", () => {
    const valorSelected = selectedElementos.value;
    const apiUrlTypeAtt = `${apiUrlType}${valorSelected}`;

    containerGeral.innerHTML = " ";
    fetch(apiUrlTypeAtt)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const ArrayPokemons = data.pokemon;

            ArrayPokemons.forEach(pokemon => {
                const containerCardPokemon = document.createElement("div");
                containerCardPokemon.classList = "Conteiner-card-pokemon";

                const divImagemPokemon = document.createElement("div");
                divImagemPokemon.classList = "imagem-pokemon";

                const imgPokemon = document.createElement("img");
                const divInformacoesPokemon = document.createElement("div");
                divInformacoesPokemon.classList = "descricao-pokemon";

                const numeroPokemon = document.createElement("p");
                numeroPokemon.classList = "numero-pokemon";

                const namePokemon = document.createElement("p");
                namePokemon.classList = "name-pokemon";

                const divTipoPokemon = document.createElement("div");
                divTipoPokemon.classList = "div-tipo-pokemon";

                const tipoPokemon = document.createElement("p");

                const tipoPokemon2 = document.createElement("p");

                containerCardPokemon.appendChild(divImagemPokemon);
                divImagemPokemon.appendChild(imgPokemon);
                containerCardPokemon.appendChild(divInformacoesPokemon);
                divInformacoesPokemon.appendChild(numeroPokemon);
                divInformacoesPokemon.appendChild(namePokemon);
                divInformacoesPokemon.appendChild(divTipoPokemon);
                divTipoPokemon.appendChild(tipoPokemon);
                divTipoPokemon.appendChild(tipoPokemon2);
                containerGeral.appendChild(containerCardPokemon);

                namePokemon.innerHTML = pokemon.pokemon.name;

                const nomepokemon = pokemon.pokemon.name;

                const urlApiPokemon = `${apiUrl}${nomepokemon}`;
                fetch(urlApiPokemon)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Erro na requisição: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(dados => {
                        imgPokemon.src = dados.sprites.front_default;
                        imgPokemon.style.width = "120px";
                        imgPokemon.style.height = "120px";

                        numeroPokemon.innerHTML = "Nº " + dados.id;

                        if (dados.types.length === 2) {
                            tipoPokemon.innerHTML = dados.types[0].type.name;
                            tipoPokemon2.innerHTML = dados.types[1].type.name;
                            const tipoNome1 = dados.types[0].type.name;
                            const tipoNome2 = dados.types[1].type.name;
                            tipoPokemon.classList = tipoPokemonClasses[tipoNome1];
                            tipoPokemon2.classList = tipoPokemonClasses[tipoNome2];
                        } else {
                            tipoPokemon.innerHTML = dados.types[0].type.name;
                            const tipoNome = dados.types[0].type.name.toLowerCase();
                            tipoPokemon.classList = tipoPokemonClasses[tipoNome];
                        }
                    });
            });
        });
});

buttonsurpresa.addEventListener("click", () => {
    containerGeral.innerHTML = " ";
    const randomPokemonId = Math.floor(Math.random() * 1000) + 1;

    const url = `${apiUrl}${randomPokemonId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            criarPokemon(data);
        });
});

// Chamada inicial para obter um Pokémon aleatório ao carregar a página
pegarInformacoesApi();
