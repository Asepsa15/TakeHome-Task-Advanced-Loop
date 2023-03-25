const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const penjumlahan = 17;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === penjumlahan) {
        console.log(`${array[i]} + ${array[j]} = ${penjumlahan}`);
    }
  }
}

console.log(`--------------------------------------------------`);

const string1 = "hello";
const string2 = "world";

for (let i = 0; i < string1.length; i++) {
  for (let j = 0; j < string2.length; j++) {
    if (string1[i] === string2[j]) {
      console.log(`${string1[i]} di index ${i} persamaan ${string2[j]} di index ${j}`);
    }
  }
}

