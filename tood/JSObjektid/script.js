// 1. Raamatu objekt ja selle meetodid
const raamat = {
  pealkiri: "Kevade",
  autor: "Oskar Luts",
  aasta: 1912,

  kuvaKirjeldus() {
    return `${this.pealkiri} — ${this.autor} (${this.aasta})`;
  },

  muudaAasta(uusAasta) {
    this.aasta = uusAasta;
  },
};

console.log("--- RAAMAT ---");
const algneKirjeldus = raamat.kuvaKirjeldus();
console.log("Algne raamat:", algneKirjeldus);

raamat.muudaAasta(2020);
const muudetudKirjeldus = raamat.kuvaKirjeldus();
console.log("Raamat pärast aasta muutmist:", muudetudKirjeldus);

// 2. Raamatukogu objekt, mille omaduseks on raamatute massiiv
const raamatukogu = {
  raamatud: [
    { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
    { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
    {
      pealkiri: "Mees, kes teadis ussisõnu",
      autor: "Andrus Kivirähk",
      aasta: 2007,
    },
    { pealkiri: "Hea härra Kivi", autor: "Andrus Kivirähk", aasta: 2018 },
  ],

  kuvaRaamatud() {
    this.raamatud.forEach((raamat, indeks) => {
      console.log(
        `${indeks + 1}. ${raamat.pealkiri} — ${raamat.autor} (${raamat.aasta})`,
      );
    });
  },

  lisaRaamat(uusRaamat) {
    this.raamatud.push(uusRaamat);
  },

  raamatuteKoguarv() {
    return this.raamatud.length;
  },

  mituParast2000() {
    return this.raamatud.filter((raamat) => raamat.aasta > 2000).length;
  },

  // Minu meetod leiab ja tagastab kõik valitud autori raamatud.
  leiaAutoriRaamatud(autor) {
    return this.raamatud.filter((raamat) => raamat.autor === autor);
  },
};

console.log("--- RAAMATUKOGU ---");
console.log("Raamatud enne uue raamatu lisamist:");
raamatukogu.kuvaRaamatud();

const lisatudRaamat = {
  pealkiri: "Rehepapp",
  autor: "Andrus Kivirähk",
  aasta: 2000,
};
raamatukogu.lisaRaamat(lisatudRaamat);
console.log("Lisatud raamat:", lisatudRaamat);

console.log("Kõik raamatud pärast lisamist:");
raamatukogu.kuvaRaamatud();

const koguarv = raamatukogu.raamatuteKoguarv();
console.log("Raamatute koguarv:", koguarv);

const parast2000 = raamatukogu.mituParast2000();
console.log("Raamatuid, mis ilmusid pärast 2000. aastat:", parast2000);

const autoriRaamatud = raamatukogu.leiaAutoriRaamatud("Andrus Kivirähk");
console.log("Andrus Kivirähku raamatud:", autoriRaamatud);

// Tulemuste kuvamine HTML-lehel
let raamatuteTulemus = "";
raamatukogu.raamatud.forEach((raamat) => {
  raamatuteTulemus += `
    <tr>
      <td>${raamat.pealkiri}</td>
      <td>${raamat.autor}</td>
      <td>${raamat.aasta}</td>
    </tr>
  `;
});

let autoriTulemus = "";
autoriRaamatud.forEach((raamat) => {
  autoriTulemus += `<li>${raamat.pealkiri} <span>(${raamat.aasta})</span></li>`;
});

document.getElementById("algneKirjeldus").textContent = algneKirjeldus;
document.getElementById("muudetudKirjeldus").textContent = muudetudKirjeldus;
document.getElementById("lisatudRaamat").innerHTML =
  `Uue raamatu lisamine: <strong>${lisatudRaamat.pealkiri}</strong> (${lisatudRaamat.aasta})`;
document.getElementById("raamatud").innerHTML = raamatuteTulemus;
document.getElementById("koguarv").textContent = koguarv;
document.getElementById("parast2000").textContent = parast2000;
document.getElementById("autoriRaamatud").innerHTML = autoriTulemus;
