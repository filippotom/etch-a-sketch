const container = document.querySelector(".container");

function createDivs(times) {
    container.style.width = "960px";
    
    for(let k = 0; k < times; k++) {
        for(let i = 0; i < times; i++) {
            const squares = document.createElement("div");
            squares.classList.add("squares");  
            
            squares.style.height = `${Math.floor(container.offsetWidth / times)}px`;
            squares.style.width = `${Math.floor(container.offsetWidth / times)}px`;
            squares.style.background = "rgb(4, 4, 189)";
            
            container.appendChild(squares);
            
            squares.addEventListener("mouseover", () => {
                squares.style.background = "yellow";
            });
        }
    }
};

const button = document.querySelector("#create");
const clear = document.querySelector("#remove");

button.addEventListener("click", () => {
    let sides = prompt("Size of the sketch? (MAX 100x100)");

    if(sides <= 100 && sides >= 1) {
        createDivs(sides);
    } else {
        alert("Choose another size");
    }
});


clear.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});