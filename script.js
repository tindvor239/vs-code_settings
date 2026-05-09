const baseUrl =
    "https://tindvor239.github.io/vs-code_settings/Images/Backgrounds/";

const grid = document.getElementById("grid");

async function loadBackgrounds() {

    const response = await fetch("./backgrounds.json");

    const backgrounds = await response.json();

    backgrounds.forEach(file => {

        const url = baseUrl + encodeURIComponent(file);

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img class="preview" src="${url}" />

            <div class="content">
                <div class="name">${file}</div>

                <button onclick="copyLink('${url}')">
                    Copy Link
                </button>
            </div>
        `;

        grid.appendChild(card);
    });
}

function copyLink(url) {

    navigator.clipboard.writeText(url);

    alert("Copied!");
}

loadBackgrounds();
