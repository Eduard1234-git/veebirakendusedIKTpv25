// Sama tekst läheb konsooli ja HTML-lehele.
function kuva(tekst) {
    console.log(tekst);
    document.getElementById("vastus").innerHTML += "<p>" + tekst + "</p>";
}

let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,
    kuvaKirjeldus() {
        return this.pealkiri + " - " + this.autor + " (" + this.aasta + ")";
    },
    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};

kuva("Algne raamat: " + raamat.kuvaKirjeldus());
raamat.muudaAasta(2020);
kuva("Muudetud aasta: " + raamat.kuvaKirjeldus());

let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 },
        { pealkiri: "Hea härra Kivi", autor: "Andrus Kivirähk", aasta: 2018 }
    ],
    kuvaRaamatud() {
        this.raamatud.forEach(raamat => {
            kuva(raamat.pealkiri + " - " + raamat.autor + " (" + raamat.aasta + ")");
        });
    },
    lisaRaamat(uusRaamat) {
        this.raamatud.push(uusRaamat);
    },
    raamatuteKoguarv() {
        return this.raamatud.length;
    },
    mituParast2000() {
        return this.raamatud.filter(raamat => raamat.aasta > 2000).length;
    },
    // Minu meetod otsib autori nime järgi.
    leiaAutoriRaamatud(autor) {
        return this.raamatud.filter(raamat => raamat.autor === autor);
    }
};

kuva("Raamatud enne lisamist:");
raamatukogu.kuvaRaamatud();
raamatukogu.lisaRaamat({ pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 });
kuva("Lisatud raamat: Rehepapp (2000)");
kuva("Raamatud pärast lisamist:");
raamatukogu.kuvaRaamatud();
kuva("Raamatute koguarv: " + raamatukogu.raamatuteKoguarv());
kuva("Pärast 2000. aastat: " + raamatukogu.mituParast2000());
kuva("Andrus Kivirähku raamatud:");
raamatukogu.leiaAutoriRaamatud("Andrus Kivirähk").forEach(raamat => {
    kuva(raamat.pealkiri + " (" + raamat.aasta + ")");
});
