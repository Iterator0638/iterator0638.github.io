
function Start() {
    SetCounter(0);

    let r = new XMLHttpRequest();
    r.addEventListener('load', function() {
        SetCounter(JSON.parse(this.responseText).count);
    })

    const path = location.pathname
    const url = `https://iterator0638.goatcounter.com/counter/${encodeURIComponent(path)}.json`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Page views:', data.count);
            SetCounter(data.count);
        })
        .catch(error => {
            console.error('Error fetching GoatCounter data:', error);
        });
}

function SetCounter(count) {
    ResetCounter();
    const counter = document.getElementById('access-counter');
    const padCount = String(count).padStart(6, "0");
    for (let i = 0; i < padCount.length; i++) {
        const char = padCount[i];
        const img = document.createElement("img");
        img.src = `/misc/access-counter/${char}.gif`;
        img.alt = char;
        counter.appendChild(img);
    }
}

function ResetCounter() {
    const counter = document.getElementById('access-counter');
    while (counter.firstChild) {
        counter.removeChild(counter.firstChild);
    }
}

Start();