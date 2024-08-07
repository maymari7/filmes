const data = {
    generos: ["terror", "coming of age", "animacao"],
    plataformas: {
    "terror": ["Netflix", "Amazon Prime"],
    "coming of age": ["HBO Max", "Paramount"],
    "animacao": ["Disney+", "Crunchyroll"]
    },
    filmes: {
    "Netflix": ["Bird Box", "O Iluminado"],
    "Amazon Prime": ["Midsommar", "Hereditário"],
    "HBO Max": ["Lady Bird", "Stand by Me"],
    "Paramount": ["Hearts Beat Loud ", "Little Wing"],
    "Disney+": ["Raya e o último dragão", "zootopia"],
    "Crunchyroll": ["Dodoro", "Erased"]
    }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Preencher o seletor de gêneros
    data.generos.forEach(genero => {
    let option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    generoSelect.appendChild(option);
    });
    });
    
    function atualizarPlataformas() {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar plataformas e filmes
    plataformaSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.disabled = true;
    
    if (generoSelect.value === "") {
    plataformaSelect.disabled = true;
    return;
    }
    
    plataformaSelect.disabled = false;
    
    // Preencher plataformas
    const plataformas = data.plataformas[generoSelect.value];
    plataformas.forEach(plataforma => {
    let option = document.createElement("option");
    option.value = plataforma;
    option.textContent = plataforma;
    plataformaSelect.appendChild(option);
    });
    }
    
    function atualizarFilmes() {
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar filmes
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    
    if (plataformaSelect.value === "") {
    filmeSelect.disabled = true;
    return;
    }
    
    filmeSelect.disabled = false;
    
    // Preencher filmes
    const filmes = data.filmes[plataformaSelect.value];
    filmes.forEach(filme => {
    let option = document.createElement("option");
    option.value = filme;
    option.textContent = filme;
    filmeSelect.appendChild(option);
    });
    }