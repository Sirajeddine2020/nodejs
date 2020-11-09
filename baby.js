//exercice 2 baby- steps

let affichage = 0;

for (let i = 0; i < process.argv.length-2; i++) {
  affichage += Number(process.argv[i+2])
}

console.log(affichage)