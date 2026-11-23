// Loeme valitud programmeerimiskeeled.
function loeKeeled() {
    var keeled = document.getElementsByName("keeled");
    var vastus = "";
    for (var i = 0; i < keeled.length; i++) {
        if (keeled[i].checked) {
            if (vastus != "") {
                vastus += ", ";
            }
            vastus += keeled[i].value;
        }
    }
    return vastus;
}

function naitaKeeled() {
    document.getElementById("keelteVastus").textContent = "Sinu valitud programmeerimiskeeled: " + loeKeeled();
}

function naitaArvamus() {
    document.getElementById("arvamuseVastus").textContent = "Sinu arvamus: " + document.getElementById("arvamus").value;
}

function naitaTunnid() {
    var tunnid = document.getElementById("tunnid").value;
    if (tunnid == "") {
        document.getElementById("tundideVastus").textContent = "";
    } else {
        document.getElementById("tundideVastus").textContent = "Tegeled programmeerimisega " + tunnid + " tundi nädalas.";
    }
}

function naitaMeeldib() {
    var pilt = document.getElementById("smile");
    if (document.getElementById("jah").checked) {
        document.getElementById("meeldibVastus").textContent = "Programmeerimine meeldib!";
        pilt.src = "roomus.svg";
        pilt.alt = "Rõõmus nägu";
    } else {
        document.getElementById("meeldibVastus").textContent = "Programmeerimine ei meeldi.";
        pilt.src = "kurb.svg";
        pilt.alt = "Kurb nägu";
    }
    pilt.hidden = false;
}

function naitaTooriistad() {
    document.getElementById("tooriistadeVastus").textContent = "Sinu nimetatud tööriistad: " + document.getElementById("tooriistad").value;
}

function naitaValik() {
    document.getElementById("valikuVastus").textContent = "Sinu valik: " + document.getElementById("oppida").value;
}

// Kokkuvõtte jaoks loeme kõik väljad uuesti.
function saada() {
    var meeldib = "Vastamata";
    if (document.getElementById("jah").checked) {
        meeldib = "Jah";
    } else if (document.getElementById("ei").checked) {
        meeldib = "Ei";
    }
    var keeled = loeKeeled();
    var arvamus = document.getElementById("arvamus").value;
    var tunnid = document.getElementById("tunnid").value;
    var tooriistad = document.getElementById("tooriistad").value;
    var oppida = document.getElementById("oppida").value;
    if (keeled == "") { keeled = "Vastamata"; }
    if (arvamus == "") { arvamus = "Vastamata"; }
    if (tunnid == "") { tunnid = "Vastamata"; }
    if (tooriistad == "") { tooriistad = "Vastamata"; }
    if (oppida == "") { oppida = "Vastamata"; }
    document.getElementById("kokkuvote").textContent =
        "Programmeerimiskeeled: " + keeled + "\n" +
        "Arvamus: " + arvamus + "\n" +
        "Tunde nädalas: " + tunnid + "\n" +
        "Kas meeldib programmeerida: " + meeldib + "\n" +
        "Tööriistad: " + tooriistad + "\n" +
        "Soovin õppida: " + oppida;
}

function puhasta() {
    document.getElementById("kysitlus").reset();
    var vastused = document.getElementsByClassName("vastus");
    for (var i = 0; i < vastused.length; i++) {
        vastused[i].textContent = "";
    }
    document.getElementById("smile").hidden = true;
    document.getElementById("smile").src = "roomus.svg";
    document.getElementById("smile").alt = "Rõõmus nägu";
    document.getElementById("kokkuvote").textContent = "";
}
