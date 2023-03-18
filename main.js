let pages = 0
let charactersTotal = 826

const $nextPage = document.querySelector("#nextPage")
const $lastPage = document.querySelector("#lastPage")

$nextPage.addEventListener("click", () => {
    if(pages <= 42) {
        pages = pages + 1
    }
    
    if(pages + 20 <= charactersTotal) {
        pages = pages + 20
        apiMorty()
    }
})

$lastPage.addEventListener("click", () => {
    if(pages > 0) {
        pages = pages - 20
        apiMorty()
    }
})

const apiMorty = async (pag) => {
    let url = `https://rickandmortyapi.com/api/character/?page=${pages}`;
    const api = await fetch(url);
    const data = await api.json();
    
    divRes = document.querySelector("#paint");
    divRes.innerHTML = ""
    data.results.map(item => {
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" alt="Avatar" style="width:100%">
            <div class="containerCard">
                <h5>${item.name}</h5>
                <a href="#" class="buttonOne">more info..</a>
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    });
}

apiMorty()