// Write your solution here!
// Initialize the cats array
let cats = ["Milo", "Otis", "Garfield"];

// 1. destructivelyAppendCat(name)
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

// 2. destructivelyPrependCat(name)
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

// 3. destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

// 4. destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

// 5. appendCat(name)
function appendCat(name) {
  return [...cats, name];
}

// 6. prependCat(name)
function prependCat(name) {
  return [name, ...cats];
}

// 7. removeLastCat()
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. removeFirstCat()
function removeFirstCat() {
  return cats.slice(1);
}


