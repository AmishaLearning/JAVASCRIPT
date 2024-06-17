const marvel_heros = ["Thor", "Ironman", "Captain America"];
const dc_heros = ["Batman", "Superman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros); // returns a new array
// console.log(all_heros); 

// spread

// const all_new_heros = [...marvel_heros, ...dc_heros]; // can add n number of strings together
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anoth_array = another_array.flat(Infinity); // returns a new array merging all arrays together without any nested arrays

// console.log(real_anoth_array);

console.log(Array.isArray("Amisha"));
console.log(Array.from("Amisha"));
console.log(Array.from({name : "Amisha"})); // interesting

let score_1 = 10;
let score_2 = 20;
let score_3 = 30;

console.log(Array.of(score_1, score_2, score_3));

