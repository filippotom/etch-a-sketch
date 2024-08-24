const container = document.querySelector(".container");

function createDivs(times) {
    for(let i = 0; i < times; i++) {
        const div = document.createElement("div");

        div.style.height = "170px";
        div.style.width = "170px";
        div.style.background = "red";
        
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            div.style.background = "green";
        });

        div.addEventListener("mouseout", () => {
            div.style.background = "red";
        });
    }
}

createDivs(16);