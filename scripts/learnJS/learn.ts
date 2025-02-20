const data = require("./data");

// 1. Ecrire une fonction qui affiche la table de multiplication de "number" en entrée (compris entre 1 et 10)
//    Exemple :
//    showMultiplicationTable(5)
//    5 x 1 = 5
//    5 x 2 = 10
//    5 x 3 = 15
//    5 x 4 = 20
//    5 x 5 = 25
//    5 x 6 = 30
//    5 x 7 = 35
//    5 x 8 = 40
//    5 x 9 = 45
//    5 x 10 = 50
const showMultiplicationTable = (number: number) => {
  let result = ``;
  for (let i = 1; i <= 10; i++) {
    result = `${result}${number} x ${i} = ${number * i}\n`;
  }
  return result;
};

// 2. Ecrire une fonction qui prend en entrée une chaîne de caractère et qui la retourne en snake_case.
//    Exemple :
//    toSnakeCase("Hello World")
//    "hello_world"
const toSnakeCase = (str: string) => {
  const result = str.toLowerCase().replaceAll(" ", "_");
  return result;
};

// 3. Ecrire une fonction qui prend en entré
// e un tableau de nombres et qui retourne un tableau avec la somme des entrées pairs
//    et la somme des entrées impairs en deuxième.
//    Exemple :
//    sumPairsAndOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//    [16, 15]
const sumPairsAndOdds = (numbers: number[]) => {
  let sommeP = 0;
  let sommeIP = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sommeP = sommeP + numbers[i];
    } else {
      sommeIP = sommeIP + numbers[i];
    }
    //console.log(i%2);
  }

  console.log(sommeP, sommeIP);
  return [sommeP, sommeIP];
};

// 4. Ecrire une fonction qui combine deux objets.
//    Exemple :
//    combine({a: 1, b: 8, d: 12}, {b: 10 c: 6, d: 7})
//    {a: 1, b: 18, c: 6, d: 19}
const combine = (
  objA: { [key: string]: number },
  objB: { [key: string]: number }
) => {
  // Boucle sur le plus grand objet
  // let myVal = 0;

  // for (let i = 0; i <= objA.length; i++) {
  //   //name =
  //   console.log(objA);
  // }

  //objA.forEach((keys(objA))=>console.log(Object.keys(objA)))
  //console.log(Object.keys(objA), "OBB:" + Object.values(objB));
  //mergeObj.forEach(Object.)
  // console.log(mergeObj);

  // Object.entries(objA).forEach(([key]) => {
  //   if (key in objB) objA.key = objA[key] + objB[key];
  //   //console.log(`${key}`, objA[key]);
  // });

  // return objA;
  const result = { ...objA };

  for (const [key, value] of Object.entries(objB)) {
    result[key] = (result[key] || 0) + value;
  }
  return result;
};

// 5. Ecrire une fonction qui vérifie si un mot de passe est valide.
//      Entre 8 - 20 caractères
//      Contient uniquement les caractères suivants (et au moins un caractère de chaque catégorie) :
//      majuscules,
//      minuscules,
//      chiffres,
//      caractères spéciaux : !@#$%^&*?
//    Retourne "Valide" si le mot de passe est valide, "Invalide" sinon.
//    Exemple :
//    isStrongPassword("Password123!")
//    "Valide"
const isStrongPassword = (password: string) => {
  const result = "Valide";

  // if password.length > 7 and < 21
  return result;
};

module.exports = {
  showMultiplicationTable: {
    fn: showMultiplicationTable,
    inputs: data.showMultiplicationTableInputs,
    outputs: data.showMultiplicationTableOutputs,
    options: {
      trim: true,
    },
  },
  toSnakeCase: {
    fn: toSnakeCase,
    inputs: data.toSnakeCaseInputs,
    outputs: data.toSnakeCaseOutputs,
  },
  sumPairsAndOdds: {
    fn: sumPairsAndOdds,
    inputs: data.sumPairsAndOddsInputs,
    outputs: data.sumPairsAndOddsOutputs,
  },
  combine: {
    fn: combine,
    inputs: data.combineInputs,
    outputs: data.combineOutputs,
    options: { shouldSpread: true },
  },
  isStrongPassword: {
    fn: isStrongPassword,
    inputs: data.isStrongPasswordInputs,
    outputs: data.isStrongPasswordOutputs,
  },
};
