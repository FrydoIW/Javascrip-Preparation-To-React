// ============================================
// 📦 JAVASCRIPT CHEAT SHEET FOR REACT (RUNNABLE DEMO)
// ============================================

console.log("\n=== 1. VARIABLES & SCOPE (WAJIB!) ===");
{
  const name = "Ali"; // Immutable, block scope
  let age = 25; // Mutable, block scope
  var oldWay = "avoid"; // Function scope, hindari

  console.log({ name, age, oldWay });
}

console.log("\n=== 2. ARROW FUNCTIONS (SERING DIPAKAI DI REACT) ===");
{
  const regularFunc = function (a, b) {
    return a + b;
  };
  const arrowFunc = (a, b) => a + b; // Implicit return
  const oneParam = (name) => `Hello ${name}`;
  const noParam = () => console.log("Hi from noParam()");
  const multiLine = () => {
    const result = 5 * 2;
    return result;
  };

  console.log("regularFunc(2, 3):", regularFunc(2, 3));
  console.log("arrowFunc(2, 3):", arrowFunc(2, 3));
  console.log("oneParam('Ali'):", oneParam("Ali"));
  noParam();
  console.log("multiLine():", multiLine());
}

console.log("\n=== 3. TEMPLATE LITERALS ===");
{
  const userName = "Budi";
  const score = 85;
  console.log(`User: ${userName}, Score: ${score}`); // Backticks ``
}

console.log("\n=== 4. DESTRUCTURING (SANGAT PENTING!) ===");
{
  // Object Destructuring
  const person = { name: "Ali", age: 30, city: "Jakarta" };
  const { name: personName, age: personAge } = person;
  // Ambil name lagi + sisanya pakai rest
  const { name: personNameAgain, ...restPerson } = person; // Rest operator

  // Array Destructuring
  const colors = ["red", "green", "blue"];
  const [firstColor, secondColor] = colors;
  const [primary, ...otherColors] = colors;

  console.log({ personName, personAge, personNameAgain, restPerson });
  console.log({ firstColor, secondColor, primary, otherColors });
}

console.log("\n=== 5. SPREAD OPERATOR (...) ===");
{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 }; // {a:1, b:2, c:3}
  const updatedObj = { ...obj1, b: 99 }; // Update property

  console.log({ combined, obj1, obj2, updatedObj });
}

console.log("\n=== 6. ARRAY METHODS (WAJIB BANGET!) ===");
{
  const numbers = [1, 2, 3, 4, 5];

  // .map() - TRANSFORM (paling sering di React)
  const doubled = numbers.map((num) => num * 2);
  console.log("doubled:", doubled); // [2, 4, 6, 8, 10]

  // .filter() - FILTER
  const even = numbers.filter((num) => num % 2 === 0);
  console.log("even:", even); // [2, 4]

  // .find() / .findIndex()
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
  ];
  const foundUser = users.find((u) => u.id === 2);
  const userIndex = users.findIndex((u) => u.name === "Budi");

  console.log("foundUser:", foundUser);
  console.log("userIndex:", userIndex);

  // .reduce() - AGREGASI
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log("sum:", sum); // 15

  // .forEach() - LOOP (jarang di React, lebih sering .map)
  console.log("forEach output:");
  numbers.forEach((num) => console.log(" -", num));
}

console.log("\n=== 7. CONDITIONAL PATTERNS (PENTING DI REACT!) ===");
{
  const isLoggedIn = true;
  const isLoading = false;
  const items = ["item1", "item2"];
  const username = "";

  // Ternary Operator
  const message = isLoggedIn ? "Welcome!" : "Please login";

  // Short-circuit Evaluation
  const displayName = username || "Guest";
  const showButtonDescription =
    isLoggedIn && "In React: render <button>Logout</button>";

  // "Simulasi" Conditional Rendering (di React ini akan jadi JSX)
  const renderedContent = isLoading ? "Show <Spinner />" : "Show <Content />";
  const renderedListDescription =
    items.length > 0 ? "Render <List items={items} />" : "Render nothing";

  console.log({ message, displayName, showButtonDescription });
  console.log({ renderedContent, renderedListDescription });
}

console.log("\n=== 8. OPTIONAL CHAINING & NULLISH COALESCING ===");
{
  const data = {
    user: {
      profile: {
        name: "Ali",
        address: { city: "Jakarta" },
      },
    },
  };

  // Optional Chaining
  const city = data.user?.profile?.address?.city; // "Jakarta"
  const country = data.user?.profile?.address?.country; // undefined

  // Nullish Coalescing
  const displayCity = city ?? "City not found"; // "Jakarta"
  const displayCountry = country ?? "Country not found"; // "Country not found"

  console.log({ city, country, displayCity, displayCountry });
}

console.log("\n=== 9. MODULES (Import/Export) - WAJIB UNTUK REACT ===");
// Contoh saja, tidak dieksekusi di file ini.
/*
  // File: utils.js
  export const PI = 3.14;
  export const double = x => x * 2;
  export default function greet(name) { return `Hello ${name}`; }

  // File: App.js
  import greet, { PI, double } from './utils';
  import React from 'react';

  console.log(greet('Ali'));
  console.log('PI:', PI);
  console.log('double(4):', double(4));
*/

console.log("\n=== 10. ASYNC/AWAIT (Data Fetching di React) ===");
{
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log("fetchData result:", data);
      return data;
    } catch (error) {
      console.error("Error in fetchData:", error.message || error);
      throw error;
    }
  }

  if (typeof fetch !== "undefined") {
    // Async/await style
    fetchData().catch(() => {});

    // Promise .then() style (alternatif)
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => response.json())
      .then((data) => console.log("Promise .then() result:", data))
      .catch((error) =>
        console.error("Promise error:", error.message || error)
      );
  } else {
    console.log("fetch tidak tersedia di environment ini, lewati demo fetch.");
  }
}

console.log("\n=== 11. EVENT HANDLING (Konsep untuk React) ===");
{
  const handleClick = (event) => {
    console.log("Clicked!", event.target);
    event.preventDefault(); // Mencegah default behavior
  };

  const handleChange = (event) => {
    console.log("Input changed:", event.target.value);
  };

  const fakeClickEvent = {
    target: "button#submit",
    preventDefault: () => console.log("default prevented"),
  };

  const fakeChangeEvent = {
    target: { value: "Hello world" },
  };

  handleClick(fakeClickEvent);
  handleChange(fakeChangeEvent);
}

console.log("\n=== 12. HIGHER-ORDER FUNCTIONS (Konsep penting) ===");
{
  function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }
  const triple = createMultiplier(3);
  console.log("triple(5):", triple(5)); // 15
}

console.log("\n=== 13. IMMUTABILITY PATTERN (PENTING DI REACT STATE) ===");
{
  const original = { a: 1, b: 2, c: { d: 3 } };

  // BENAR - Buat copy baru
  const updated = { ...original, a: 99 }; // Shallow copy
  const deepUpdated = {
    ...original,
    c: { ...original.c, d: 99 },
  }; // Deep copy nested

  console.log({ original, updated, deepUpdated });
}

console.log("\n=== 14. ARRAY IMMUTABILITY OPERATIONS ===");
{
  const items = ["a", "b", "c"];

  // Add item (jangan push!)
  const newItems = [...items, "d"]; // ['a', 'b', 'c', 'd']

  // Remove item (jangan splice!)
  const filtered = items.filter((item) => item !== "b"); // ['a', 'c']

  // Update item
  const updatedItems = items.map((item) => (item === "b" ? "B" : item)); // ['a', 'B', 'c']

  console.log({ items, newItems, filtered, updatedItems });
}

console.log("\n=== 15. OBJECT METHODS ===");
{
  const obj = { x: 1, y: 2, z: 3 };

  console.log("Object.keys:", Object.keys(obj)); // ['x', 'y', 'z']
  console.log("Object.values:", Object.values(obj)); // [1, 2, 3]
  console.log("Object.entries:", Object.entries(obj)); // [['x', 1], ['y', 2], ['z', 3]]
}

console.log("\n=== 16. PRAKTIK: SIMULASI KASUS REACT ===");
{
  // Data untuk rendering list
  const products = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Mouse", price: 50, inStock: false },
    { id: 3, name: "Keyboard", price: 100, inStock: true },
  ];

  // 1. Filter + Map (sering di React)
  const availableProducts = products
    .filter((product) => product.inStock)
    .map((product) => ({
      ...product,
      priceWithTax: product.price * 1.1,
    }));

  console.log("Available products:", availableProducts);

  // 2. Destructuring dalam function parameter
  function displayProduct({ id, name, price }) {
    return `${name} - $${price}`;
  }

  products.forEach((p) => console.log("displayProduct:", displayProduct(p)));

  // 3. Conditional rendering simulation
  const cart = [];
  const cartMessage =
    cart.length > 0 ? `You have ${cart.length} items` : "Your cart is empty";

  console.log("cartMessage:", cartMessage);
}

// ============================================
// ✅ TAMBAHAN YANG PENTING UNTUK REACT
// ============================================

console.log("\n=== 17. EQUALITY & TRUTHY/FALSY ===");
{
  const a = 0;
  const b = "";
  const c = null;
  const d = "hello";

  console.log("0 == false:", 0 == false); // true (coercion)
  console.log("0 === false:", 0 === false); // false (strict)
  console.log("'5' == 5:", "5" == 5); // true
  console.log("'5' === 5:", "5" === 5); // false

  console.log("!!a (0):", !!a); // false
  console.log('!!b (""):', !!b); // false
  console.log("!!c (null):", !!c); // false
  console.log('!!d ("hello"):', !!d); // true
}

console.log("\n=== 18. DEFAULT PARAMS, REST PARAMS & OBJECT SHORTHAND ===");
{
  function greet(name = "Guest") {
    return `Hello, ${name}`;
  }

  function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0);
  }

  const x = 10;
  const y = 20;
  // Object shorthand: { x: x, y: y } -> { x, y }
  const point = { x, y };

  console.log("greet():", greet());
  console.log("greet('Ali'):", greet("Ali"));
  console.log("sumAll(1,2,3,4):", sumAll(1, 2, 3, 4));
  console.log("point:", point);
}

console.log(
  "\n=== 19. ARRAY HELPERS TAMBAHAN (.some, .every, .includes, .sort) ==="
);
{
  const nums = [1, 2, 3, 4, 5];

  const hasEven = nums.some((n) => n % 2 === 0); // ada minimal satu genap?
  const allPositive = nums.every((n) => n > 0); // semua positif?
  const includesThree = nums.includes(3); // apakah mengandung 3?
  const sortedDesc = [...nums].sort((a, b) => b - a); // sort descending (copy dulu)

  console.log({ nums, hasEven, allPositive, includesThree, sortedDesc });
}

console.log("\n=== 20. CLOSURES (PENTING BUAT PAHAM HOOKS REACT) ===");
{
  function makeCounter() {
    let count = 0;
    return function () {
      count += 1;
      return count;
    };
  }

  const counterA = makeCounter();
  console.log("counterA():", counterA()); // 1
  console.log("counterA():", counterA()); // 2
  const counterB = makeCounter();
  console.log("counterB():", counterB()); // 1 (mulai dari 0 lagi di instance lain)
}

// ============================================
// 🚀 READY FOR REACT CHECKPOINT
// ============================================
console.log("\n=== 🚀 READY FOR REACT CHECKPOINT ===");
console.log("Kuasaikan ini dulu:");
console.log("1. Arrow functions");
console.log("2. .map() dan .filter()");
console.log("3. Destructuring object/array");
console.log("4. Spread operator (...obj / ...array)");
console.log("5. Template literals (`string ${var}`)");
console.log("6. Ternary operator (condition ? a : b)");
console.log("7. Basic async/await");
console.log("8. Truthy/falsy & === vs ==");

// ============================================
// 📝 CONTOH TRANSFORMASI KE REACT (HANYA KOMENTAR)
// ============================================
console.log("\n=== 📝 LIHAT CONTOH JSX DI DALAM KOMENTAR ===");
/*
function ProductList() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}

function CartStatus() {
  return (
    <div>
      {cart.length > 0 ? (
        <p>Items: {cart.length}</p>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  
  return <button onClick={handleClick}>Click me</button>;
}
*/

console.log("\n🎯 NEXT STEP: COBA REACT SEKARANG!");
console.log("npx create-react-app my-app");
console.log("cd my-app && npm start");
