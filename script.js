const container = document.querySelector(".container");
const button = document.querySelector("button");

function createDivs(times) {
    for(let k = 0; k < times; k++) {
        for(let i = 0; i < times; i++) {
            const div = document.createElement("div");
    
            div.style.height = `${Math.floor(container.offsetWidth / times)}px`;
            div.style.width = `${Math.floor(container.offsetWidth / times)}px`;
            div.style.background = "red";

            console.log(container.offsetWidth / times)
            
            container.appendChild(div);
    
            div.addEventListener("mouseover", () => {
                div.style.background = "green";
            });
    
            div.addEventListener("mouseout", () => {
                div.style.background = "red";
            });
        }
    }
};

function removeDivs(times) {
    for(let i = 0; i < times; i++) {
        container.remove();
    }
};

button.addEventListener("click", () => {
    let sides = prompt("Size of the sketch? (MAX 100)");
    createDivs(sides);
    removeDivs(sides);
});

