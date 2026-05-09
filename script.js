const baseUrl =
    "https://tindvor239.github.io/vs-code_settings/Images/Backgrounds/";

const grid = document.getElementById("grid");

async function loadBackgrounds() {

    try {

        const response = await fetch(
            "https://tindvor239.github.io/vs-code_settings/backgrounds.json"
        );

        const backgrounds = await response.json();

        backgrounds.forEach(file => {

            const url = encodeURI(baseUrl + file);

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
    catch(error) {

        console.error(error);
    }
}

function copyLink(url) {

    navigator.clipboard.writeText(url);

    alert("Copied!");
}

loadBackgrounds();
