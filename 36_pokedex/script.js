const poke_container = document.getElementById('poke-container')
const pokemon_count = 150

const colors = {
    fire: 'https://i.pinimg.com/originals/f5/76/6e/f5766eb57eaa1bb31c742f8facb3b522.gif',
    grass: 'https://media2.giphy.com/media/oNTQZNB67kMf5VHiCj/giphy.gif',
    electric: 'https://static.wikia.nocookie.net/superpoderes/images/1/16/Magia_de_Eletricidade_Laxus.gif/revision/latest?cb=20200302150852&path-prefix=pt-br',
    water: 'https://c.tenor.com/8oiD_k8mWrYAAAAC/anime-sky.gif',
    ground: 'https://c.tenor.com/vkyIvsJ6oTEAAAAC/fire-force-anime.gif',
    rock: 'https://thumbs.gfycat.com/BetterSimilarGermanshepherd-max-1mb.gif',
    fairy: 'https://data.whicdn.com/images/342990206/original.gif',
    poison: 'https://64.media.tumblr.com/322c254a3d6ea82f58039b1644624471/458eb515178d892d-d1/s540x810/d0148cce67e1bbc537ccb535664d3cc06eef9f8a.gifv',
    bug: 'https://i.pinimg.com/originals/04/75/61/047561f8935462b22bbb12961d144217.gif',
    dragon: 'https://i.pinimg.com/originals/ae/fa/a0/aefaa0143b4b34ef69af71896948b451.gif',
    psychic: 'https://64.media.tumblr.com/dcb147668d0a52b013a1011b25e43521/6ae1396e448dc108-93/s540x810/2484257a092700c9cf3a3abd5d6542262228dba2.gifv',
    flying: 'https://pa1.narvii.com/6638/4770a3db8d8d3abf6b07902b9042818fc74dfe6e_hq.gif',
    fighting: 'https://thumbs.gfycat.com/GloomyPoliteHeron-max-1mb.gif',
    normal: 'https://64.media.tumblr.com/00e9313dc2a46c7e3c0520e58128f664/tumblr_pz5jzxGKRA1uzwgsuo1_400.gifv'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundImage =  `url(${color}) `


    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemons()