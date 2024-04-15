const btn = document.querySelector("#js-new-pun");
btn.addEventListener('click', getPun);

const endpoint = 'https://punapi.rest/api/pun';

async function getPun() {

    try {
        const response = await fetch(endpoint, {
            redirect: 'follow'
        });
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json['pun']);
        displayPun(json['pun']);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new pun');
    }
}

function displayPun(pun) {
    const punText = document.querySelector("#js-pun-text");
    punText.textContent = pun;
}

getPun();

