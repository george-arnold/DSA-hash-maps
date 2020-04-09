const HashMap = require("./hashclass");

const main = function () {
  const LOTR = new HashMap();
  LOTR.MAX_LOAD_RATIO = 0.5;
  LOTR.SIZE_RATIO = 0.5;
  LOTR.set("Hobbit", "Bilbo");
  LOTR.set("Hobbit", "Frodo");
  LOTR.set("Wizard", "Gandalf");
  LOTR.set("Human", "Aragorn");
  LOTR.set("Elf", "Legolas");
  LOTR.set("Maiar", "The Necromancer");
  LOTR.set("Maiar", "Sauron");
  LOTR.set("Ringbearer", "Gollum");
  LOTR.set("LadyOfLight", "Galadriel");
  LOTR.set("HalfElven", "Arwen");
  LOTR.set("Ent", "Treebeard");
  console.log(LOTR);
  console.log(LOTR.get("Maiar"));
  console.log(LOTR.get("Hobbit"));
};

// main();

//What are the values of Maiar and Hobbit
//  that you have? Is there a discrepancy? Explain your answer.

// Hobbit returns Frodo and not Bilbo, Maiar only has Sauron. Both were replacing old values

//What is the capacity of your hash table
// after you have hashed all the above items? Explain your answer.
// 8, it says so in the console log

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
// WhatDoesThisDo();

// sets string 1 to Hello World
// sets a key value to a key "Hello World" to value 10
// sets the same string value 20. Hello World now has value 20

// in a different hashmap 3 and 4 are set to 1 and 2
// 3 is set to 20, 4 is set to 10
// 3 returns 10, 1 returns 20.  Keys are restricted to their maps
// but can be over written from inside their own map
// even if data is connected outside

function removeDuplicateCharacters(string) {
  return string
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}
// console.log(removeDuplicateCharacters('Google'));

function palindrome(string) {
  const array = string.split("");
  const hash = new HashMap();
  let odd = 0;
  array.forEach((character) => {
    let count = 1;
    if (hash._hashTable.includes(character)) {
      count++;
    }
    hash.set(character, count);
  });
  hash.forEach((key) => {
    if (hash.get(key) % 2 !== 0) {
      odd++;
    }
    if (odd <= 1) {
      return true;
    } else {
      return false;
    }
  });
}
