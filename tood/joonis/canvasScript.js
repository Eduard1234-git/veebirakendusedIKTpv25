
function joon() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext('2d')) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50);
        tx.lineTo(200, 280);
        tx.stroke();
    }
}

function puhasta() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.clearRect(0, 0, 400, 400);
    }
}

function kolmnurk() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext('2d')) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50);
        tx.lineTo(200, 280);
        tx.lineTo(30, 350);
        tx.lineTo(50, 50);
        tx.fill();
        tx.stroke();
    }
}


function ristkylik() {
    const canvas = document.getElementById('canvas');
    const l = document.getElementById('laius');
    const k = document.getElementById('kyrgus');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.fillStyle = "red";
        tx.fillRect(100, 150, Number(l.value), Number(k.value));
    }
}



function ring() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById('raadius');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "red";
        tx.arc(100, 100, Number(r.value), 0, 2 * Math.PI, true);
        tx.fill();
        tx.stroke();
    }
}


function pilt() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        const fail = new Image();

        fail.onload = () => {
            tx.drawImage(fail, 50, 50, 100, 100);
        };

        fail.src = "https://picsum.photos/100/100?random=" + Date.now();
    }
}


function ratas1() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "black";
        tx.arc(90, 220, 25, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();
    }
}

function ratas2() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "black";
        tx.arc(210, 220, 25, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();
    }
}

function kere() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.fillStyle = "red";
        tx.fillRect(50, 130, 200, 70);
        tx.fillRect(100, 90, 100, 40);
    }
}

function tuled() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "yellow";
        tx.arc(245, 155, 10, 0, 2 * Math.PI);
        tx.fill();

        tx.beginPath();
        tx.strokeStyle = "yellow";
        tx.lineWidth = 3;
        tx.moveTo(260, 155);
        tx.lineTo(285, 155);
        tx.moveTo(260, 155);
        tx.lineTo(280, 140);
        tx.moveTo(260, 155);
        tx.lineTo(280, 170);
        tx.stroke();
    }
}

function aken() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.fillStyle = "lightblue";
        tx.fillRect(110, 100, 80, 25);
    }
}


