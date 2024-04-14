/*
    ? RENOMMER le dossier par NOM_Prenom avant de commencer

    Description: Javascript Practice
    Language: JavaScript
    Created: 2024-04-09
    By: @edjek
    TODO: Lisez les instructions ci-dessous et écrivez votre code dans le fichier main.js
    * La correction se trouvera dans le fichier correction.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

//      _________
//     / ======= \
//    / __________\
//   | ___________ |
//   | | -       | |
//   | |         | |
//   | |_________| |________________________
//   \=____________/   EDJEKOUANE Rachid     )
//   / """"""""""" \                        /
//  / ::::::::::::: \                   =D-'
// (_________________)

// ----------------------------------- The 100 -----------------------------------

const serie = {
  nom: "The 100",
  nbrSaison: 7,
  nbrEpisode: 100,
  listNote: [2, 4, 3, 5, 3, 4, 3, 2, 1],
  genres: ["Dystopie", "Action", "Drame", "Science-fiction"],
  acteurs: {
    principal: "Clarke Griffin",
    secondaire: "Bellamy Blake",
  },
};

// ---------------------------------- Exercice 0 ----------------------------------

// Affichez le nom de la série

console.log(serie.nom);

// Affichez le nombre de saisons de la série

console.log(serie.nbrSaison);

// Affichez le nom de l'acteur principal

console.log(serie.acteurs.principal);

// Destructurez les propriétés suivantes: nom, nbrSaison, genres et acteur principal

const {
  nom,
  nbrSaison,
  genres,
  acteurs: { principal },
} = serie;

// ---------------------------------- Exercice 1 ----------------------------------

// Créez une fonction qui prend un tableau et affiche chaque élément en console.

const fruits = ["banane", "fraise", "orange", "mangue", "melon"];

function arrayAffiche(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
arrayAffiche(fruits);

//! Affichez les genres de la série en utilisant la fonction créée

arrayAffiche(serie.genres);

// ---------------------------------- Exercice 2 ----------------------------------

// Créez une fonction averageArray() qui prend un tableau et renvoie la moyenne de tous les éléments.

function averageArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}

// Affichez la moyenne des notes de la série en utilisant la fonction créée

console.log(averageArray(serie.listNote));

// ---------------------------------- Exercice 3 ----------------------------------

// Créez une fonction checkSerie() qui prend un tableau en parametre si la moyenne est supérieure à 3, affichez 'La série est bonne', sinon affichez 'La série est mauvaise' (utilisez la fonction precedente pour le calcul de la moyenne).

function checkSerie(array) {
  if (averageArray(array) > 3) {
    console.log("La serie est bonne");
  } else {
    console.log("La serie est mauvaise");
  }
}

// Affichez si la série est bonne ou mauvaise en utilisant la fonction créée

checkSerie(serie.listNote);
// ---------------------------------- Exercice 4 ----------------------------------

// Créez une fonction maxNumber() qui prend un tableau de nombres et renvoie le nombre le plus grand.

function maxNumber(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

// Affichez la note la plus grande de la série en utilisant la fonction créée

console.log(maxNumber(serie.listNote));

// ---------------------------------- Exercice 5 ----------------------------------

// Créez une fonction minNumber() qui prend un tableau de nombres et renvoie le nombre le plus petit.

function minNumber(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

// Affichez la note la plus petite de la série en utilisant la fonction créée

console.log(minNumber(serie.listNote));

// ---------------------------------- Exercice 6 ----------------------------------

// Créez un objet avec les propriétés suivantes:
// nom: 'John'
// age: 30
// ville: 'New York'
// salary: 3800
// prime: tableau avec les valeurs suivantes: 1890, 2890, 3700
// job: objet avec les propriétés suivantes:
//     titre: 'Développeur Web'
//     entreprise: 'Google'
// description: fonction qui retourne 'NOM est un JOB de AGE ans vivant à VILLE. Il travaille chez ENTREPRISE et gagne SALARY euros par mois.'

const person = {
  nom: "John",
  age: 30,
  ville: "New York",
  salary: 3800,
  prime: [1890, 2890, 3700],
  job: {
    titre: "Developpeur web",
    entreprise: "Google",
  },
  description: function () {
    return `${this.nom} est un ${this.job.titre} de ${this.age} ans vivant a ${this.ville}. Il travaille chez ${this.job.entreprise} et gagne ${this.salary} euros par mois`;
  },
};

// Destructurez les propriétés suivantes :
// nom, age, ville, prime , titre, entreprise, description

const {
  nom: name,
  age,
  ville,
  prime,
  job: { titre, entreprise },
  description,
} = person;

console.log(person.description());

// ---------------------------------- Exercice 7 ----------------------------------

// Faites une requête AJAX pour récupérer les données de l'API suivante: 'https://api.kanye.rest/'
// Créez un paragraphe avec la class message-request et affichez la citation de Kanye West dans la section #container.

fetch("https://api.kanye.rest/")
  .then((reponse) => {
    return reponse.json();
  })
  .then((data) => {
    console.log(data);
    const paragraphe = document.createElement("p");
    paragraphe.classList.add("message-request");
    paragraphe.textContent = data.quote;

    const cibleSection = document.querySelector("#container");
    cibleSection.append(paragraphe);
  })
  .catch((error) => {
    console.log(error);
  });

// ---------------------------------- Exercice 8 ----------------------------------

// Faites une requête AJAX pour récupérer les données de l'API suivante: 'https://api.chucknorris.io/jokes/random'
// Creez un paragraphe avec la class message-request et affichez la blague de Chuck Norris dans la section #container.

fetch("https://api.chucknorris.io/jokes/random")
  .then((reponse) => {
    return reponse.json();
  })
  .then((data) => {
    const paragraphe = document.createElement("p");
    paragraphe.classList.add("message-request");
    paragraphe.textContent = data.value;

    const cibleSection = document.querySelector("#container");
    cibleSection.append(paragraphe);
  })
  .catch((error) => {
    console.log(error);
  });

// ---------------------------------- Exercice 9 ----------------------------------

// Faites une requête AJAX pour récupérer les données de l'API suivante: 'https://poetrydb.org/author'
// Affichez le nombre d'auteurs présent et affichez le nom du premier auteur en console

fetch("https://poetrydb.org/author")
  .then((reponse) => {
    return reponse.json();
  })
  .then((data) => {
    console.log(data.authors.length);
    console.log(data.authors[0]);
  })
  .catch((error) => {
    console.log(error);
  });

/* ----------------------------------------------------------- */
/*                  Tableau d'Objets Avengers                  */
/* ----------------------------------------------------------- */

const superherosVol = [
  {
    nom: "Iron Man",
    vraiNom: "Tony Stark",
    alias: "Iron Man",
    description: "Milliardaire, génie, playboy, philanthrope",
    capacites: {
      intellect: "Niveau génie",
      armure: "Motorisée",
    },
    equipement: [
      "Iron Man Suit Mark LXXXV",
      "Répulseurs",
      "Unibeam",
      "Missiles",
    ],
    films: [
      "Iron Man",
      "Avengers",
      "Iron Man 2",
      "Avengers: Age of Ultron",
      "Iron Man 3",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Captain America",
    vraiNom: "Steve Rogers",
    alias: "Capitaine America",
    description: "Héros de la Seconde Guerre mondiale, leader des Avengers",
    capacites: {
      force: "Surhumaine",
      agilite: "Exceptionnelle",
      artsMartiaux: "Maîtrise des arts martiaux",
    },
    equipement: [
      "Bouclier en vibranium",
      "Costume de Captain America",
      "Bouclier",
      "Mjolnir (temporairement)",
    ],
    films: [
      "Captain America: First Avenger",
      "Avengers",
      "Captain America: Le Soldat de l'Hiver",
      "Avengers: Age of Ultron",
      "Captain America: Civil War",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Thor",
    vraiNom: "Thor Odinson",
    alias: "Dieu du Tonnerre",
    description: "Prince d'Asgard, protecteur de la Terre",
    capacites: {
      force: "Surhumaine",
      vol: "Possible",
      foudre: "Contrôle sur la foudre",
    },
    equipement: ["Mjolnir", "Armure Asgardienne"],
    films: [
      "Thor",
      "Avengers",
      "Thor: Le Monde des ténèbres",
      "Avengers: Age of Ultron",
      "Thor: Ragnarok",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Hulk",
    vraiNom: "Bruce Banner",
    alias: "Hulk",
    description:
      "Scientifique exposé à des radiations gamma, capable de se transformer en monstre vert géant lorsqu'il est en colère",
    capacites: {
      force: "Surhumaine",
      endurance: "Incroyable",
      saut: "Sauts prodigieux",
    },
    films: [
      "The Incredible Hulk",
      "The Avengers",
      "Avengers: Age of Ultron",
      "Thor: Ragnarok",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Black Widow",
    vraiNom: "Natasha Romanoff",
    alias: "Black Widow",
    description:
      "Ancienne espionne russe, experte en arts martiaux et en infiltration",
    capacites: {
      agilite: "Exceptionnelle",
      combatRapproche: "Maîtrise des arts martiaux",
      espionage: "Espionnage et infiltration",
    },
    equipement: ["Baton électrique", "Armes à feu", "Gadgets d'espionnage"],
    films: [
      "Iron Man 2",
      "The Avengers",
      "Captain America: The Winter Soldier",
      "Avengers: Age of Ultron",
      "Captain America: Civil War",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Hawkeye",
    vraiNom: "Clint Barton",
    alias: "Hawkeye",
    description: "Tireur d'élite et expert en combat au corps à corps",
    capacites: {
      precision: "Tir à l'arc de précision",
      combatRapproche: "Maîtrise des arts martiaux",
    },
    equipement: [
      "Arc et flèches spéciales",
      "Armes de poing",
      "Armes de mêlée",
    ],
    films: [
      "Thor",
      "The Avengers",
      "Avengers: Age of Ultron",
      "Captain America: Civil War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Black Panther",
    vraiNom: "T'Challa",
    alias: "Black Panther",
    description: "Roi du Wakanda, combattant agile et expert en technologie",
    capacites: {
      force: "Surhumaine",
      agilite: "Exceptionnelle",
      furtivite: "Furtivité avancée",
      combatRapproche: "Maîtrise des arts martiaux",
    },
    equipement: [
      "Costume de Black Panther",
      "Griffes en vibranium",
      "Technologie avancée du Wakanda",
    ],
    films: [
      "Captain America: Civil War",
      "Black Panther",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Doctor Strange",
    vraiNom: "Stephen Strange",
    alias: "Doctor Strange",
    description:
      "Ancien neurochirurgien devenu sorcier suprême, maître des arts mystiques",
    capacites: {
      magie: "Manipulation des forces mystiques",
      projectionAstrale: "Projection astrale",
      teleportation: "Téléportation",
    },
    equipement: ["Œil d'Agamotto", "Cape de lévitation"],
    films: [
      "Doctor Strange",
      "Thor: Ragnarok",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Spider-Man",
    vraiNom: "Peter Parker",
    alias: "Spider-Man",
    description:
      "Jeune étudiant doté de capacités arachnéennes après avoir été mordu par une araignée radioactive",
    capacites: {
      force: "Surhumaine",
      agilite: "Exceptionnelle",
      endurance: "Endurance accrue",
      sensAraignee: "Sens d'araignée",
    },
    equipement: [
      "Toile de Spider-Man",
      "Lanceurs de toile",
      "Costume de Spider-Man",
    ],
    films: [
      "Captain America: Civil War",
      "Spider-Man: Homecoming",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Scarlet Witch",
    vraiNom: "Wanda Maximoff",
    alias: "Scarlet Witch",
    description:
      "Mutante dotée de pouvoirs de manipulation de la réalité et de télékinésie",
    capacites: {
      telekinesie: "Télékinésie",
      manipulationRealite: "Manipulation de la réalité",
      magie: "Pouvoirs mystiques",
    },
    equipement: ["Aucun"],
    films: [
      "Captain America: The Winter Soldier",
      "Avengers: Age of Ultron",
      "Captain America: Civil War",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Vision",
    vraiNom: "Vision",
    alias: "Vision",
    description:
      "Androïde créé par Ultron, doté d'une pierre d'infinité et de capacités surhumaines",
    capacites: {
      force: "Surhumaine",
      vol: "Vol",
      intangibilite: "Intangibilité",
      rayonsEnergetiques: "Rayons énergétiques",
    },
    equipement: [
      "Pierre de l'esprit",
      "Corps synthétique",
      "Costume de Vision",
    ],
    films: [
      "Avengers: Age of Ultron",
      "Captain America: Civil War",
      "Avengers: Infinity War",
      "Avengers: Endgame",
    ],
  },
  {
    nom: "Ant-Man",
    vraiNom: "Scott Lang",
    alias: "Ant-Man",
    description:
      "Voleur et ingénieur équipé d'un costume qui lui permet de rétrécir ou de devenir géant",
    capacites: {
      rétrécissement: "Rétrécissement",
      augmentation: "Augmentation de taille",
    },
    equipement: ["Costume d'Ant-Man", "Pym Particles"],
    films: [
      "Ant-Man",
      "Captain America: Civil War",
      "Ant-Man and the Wasp",
      "Avengers: Endgame",
    ],
  },
];

// ---------------------------------- Exercice 10 ----------------------------------

// Affichez la liste des films dans lesquels chaque super-héros est apparu.

// for (const element of avengers) {
//   console.log(element.films);
// }

// Affichez: 'ALIAS est apparu dans les films suivants: films'
console.log(
  "------------------------- Films dans lesquels chaque super-héros est apparu: -------------------------"
);
for (const element of superherosVol) {
  console.log(
    `${element.alias} est apparu dans les films suivants : ${element.films}`
  );
}
// ---------------------------------- Exercice 11 ----------------------------------

// Affichez la liste des super-héros qui ont des capacités de vol.
// Affichez: 'ALIAS peut voler'
console.log(
  "------------------------- Avengers qui peuvent voler: -------------------------"
);
for (const avenger of superherosVol) {
  if (avenger.capacites.vol) {
    console.log(`${avenger.alias} peut voler`);
  }
}

// ---------------------------------- Exercice 12 ----------------------------------

// Affichez la liste des super-héros qui ont des capacités de télékinésie.
// Affichez: 'ALIAS a des capacités de télékinésie'
console.log(
  "------------------------- Avengers avec des capacités de télékinésie: -------------------------"
);
for (const avenger of superherosVol) {
  if (avenger.capacites.telekinesie) {
    console.log(`${avenger.alias} a des capacités de télékinésie`);
  }
}
// ---------------------------------- Exercice 13 ----------------------------------

// Affichez la liste des super-héros qui n'ont pas d'équipement.
// Affichez: 'ALIAS n'a pas d'équipement'
console.log(
  "------------------------- Avengers sans équipement: -------------------------"
);
for (const avenger of superherosVol) {
  if (!avenger.equipement || avenger.equipement[0] == "Aucun") {
    console.log(`${avenger.alias} n'a pas d'equipement`);
  }
}

// ---------------------------------- Exercice 14 ----------------------------------

// Affichez la liste des super-héros qui ont joué dans plus de 5 films.
// Affichez: 'ALIAS a joué dans plus de 5 films'
console.log(
  "------------------------- Avengers qui ont joué dans plus de 5 films: -------------------------"
);
for (const avenger of superherosVol) {
  const { alias } = avenger;
  if (avenger.films.length > 5) {
    console.log(`${avenger.alias} a joué dans plus de 5 films`);
  }
}

// ---------------------------------- Exercice 15 ----------------------------------

// Pour chaque super-héros, destructurer les propriétés suivantes: alias, description, capacites, films.
// Affichez : 'Nom: alias, Description: description, Films: films'
console.log(
  "------------------------- Destructuration des propriétés suivantes: -------------------------"
);

for (const { alias, description, films } of superherosVol) {
  console.log(`Nom:${alias}, Description:${description}, Films:${films}`);
}

// ---------------------------------- Exercice 16 ----------------------------------

// Créez une fonction getFlyingSuperheroes() qui prend un tableau de super-héros en parametre et renvoie un tableau de super-héros qui ont des capacités de vol.

function getFlyingSuperheroes(array) {
  const tableau = [];

  for (const element of array) {
    if (element.capacites.vol) {
      tableau.push(element);
    }
  }
  return tableau;
}
const resultat = getFlyingSuperheroes(superherosVol);
console.log(resultat);

console.log(
  "------------------------- Super-héros avec des capacités de vol: -------------------------"
);

// Affichez la liste des super-héros qui ont des capacités de vol en utilisant la fonction créée precedemment.
// Affichez : 'ALIAS peut voler'

const SuperherosVolant = getFlyingSuperheroes(superherosVol);
for (const superHero of resultat) {
  console.log(`${superHero.alias} peut voler`);
}

// ---------------------------------- Exercice 17 ----------------------------------

//  Afficher la liste des super-héros qui ont des capacités de vol dans une div HTML qui aura la classe super-hero
// Le nom de chaque super-héros doit être dans une balise h2.
// La description de chaque super-héros doit être dans une balise p.
// La liste des films de chaque super-héros doit être dans une balise ul.
// Chaque film doit être dans une balise li.
const SuperherosVol = getFlyingSuperheroes(resultat);

const htmlContainer = document.querySelector("#super-heros-list");

for (const superHero of SuperherosVol) {
  const volContainer = document.createElement("div");

  volContainer.classList.add("super-hero");

  const title = document.createElement("h2");
  title.textContent = superHero.alias;

  const description = document.createElement("p");
  description.textContent = superHero.description;

  const listeFilm = document.createElement("ul");

  for (const film of superHero.films) {
    const elementListe = document.createElement("li");
    elementListe.textContent = film;
    listeFilm.append(elementListe);
  }

  volContainer.append(title, description, listeFilm);
  htmlContainer.append(volContainer);
}

// ---------------------------------- Exercice 18 ----------------------------------

// Créez une fonction qui prend un tableau de super-héros et renvoie un tableau de super-héros qui ont joué dans plus de 5 films.

function superHeroes(array) {
  const arrayFilms = [];
  for (const objet of array) {
    if (objet.films.length > 5) {
      arrayFilms.push(objet);
    }
  }
  return arrayFilms;
}

const response = superHeroes(superherosVol);
console.log(response);

// Utilisez la fonction pour afficher la liste des super-héros qui ont joué dans plus de 5 films dans une div HTML qui aura la classe super-hero
// Le nom de chaque super-héros doit être dans une balise h2.
// La description de chaque super-héros doit être dans une balise p.
// La liste des films de chaque super-héros doit être dans une balise ul.

const superHerosFilms = superHeroes(response);

for (const acteur of superHerosFilms) {
  const container = document.createElement("div");
  container.classList.add("super-hero");

  const title = document.createElement("h2");
  title.textContent = acteur.nom;

  const description = document.createElement("p");
  description.textContent = acteur.description;

  const liste = document.createElement("ul");

  for (const film of acteur.films) {
    const elementListe = document.createElement("li");
    elementListe.textContent = film;
    liste.append(elementListe);
  }

  container.append(title, description, liste);

  const divHtml = document.querySelector("#super-heros-5-films-list");
  divHtml.append(container);
}
// ---------------------------------- Exercice 19 ----------------------------------

// Créez une fonction qui calcule la moyenne du nombre de films dans lesquels chaque super-héros a joué.

function moyenneFilms(array) {
  let somme = 0;
  for (let i = 0; i < array.length; i++) {
    somme = somme + array[i].films.length;
  }
  return somme / array.length;
}

const moyenneNbrFilms = moyenneFilms(superHerosFilms);

console.log(
  "------------------------- Moyenne du nombre de films dans lesquels chaque super-héros a joué: -------------------------"
);

// Afficher : 'la moyenne du nombre de films dans lequel a joué un super héro est de :' (arrondir le nombre à 2 nombres après la virgule)

console.log(
  `La moyenne du nombre de films dans lequel a joué un super héro est de : ${moyenneNbrFilms.toFixed(
    2
  )}`
);

// ---------------------------------- Exercice 20 ----------------------------------

// Ajoutez une alert qui affiche 'Exercices Javascript fini' en bas de la page, lorsque le scroll sur la page atteint plus de 800px
// window.addEventListener('scroll', function () {
//     if (window.scrollY > 800) {
//         alert('Exercices Javascript fini');
//     }
// });

let alerteAffichee = false;
const seuilMax = document.body.scrollHeight - window.innerHeight + 140;
function afficherAlerte() {
  alerteAffichee = true;
  alert("Exercices Javascript fini");
  window.removeEventListener("scroll", verifierAffichageAlerte);
}

function verifierAffichageAlerte() {
  if (window.scrollY > seuilMax && !alerteAffichee) {
    afficherAlerte();
  }
}

window.addEventListener("scroll", verifierAffichageAlerte);
