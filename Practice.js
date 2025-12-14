console.log("Practice Js VARIABLE AND SCOPE");
{
  const nama = "Dodo";
  let umur = 31;
  var kelas = "7SD";

  console.log({ nama, umur, kelas });
}

console.log("ARROW FUNCTION");
{
  const functionSatu = function (a, b) {
    return a + b;
  };

  const testArrow = (x, y) => x + y;

  const satuParam = (name) => `Hello ${name}`;

  const gadaParam = () => "No Param Lae";

  const multiline = () => {
    const result = 2 + 3;
    return result;
  };

  console.log("function Satu : ", functionSatu(2, 3));
  console.log("testArrow :", testArrow(2, 3));
  console.log("Satu Param :", satuParam("DODO"));
  console.log("Gada Param : ", gadaParam());
  console.log("MultiLine", multiline());
}

console.log("TEMPLATE LITERAL");
{
  const name = "DODOCOOL";
  const umur = "31";

  console.log(`User : ${name}, Umur : ${umur}`);
}

console.log("DESTRUCTURING IMPORTANT");
{
  const person = { name: "Dodo", age: 31, city: "Jakarta" };

  const { name: personName, age: personAge } = person;

  const { name: personNameAgain, ...restPerson } = person; // rest operator

  console.log(personName, personAge, personNameAgain, restPerson);

  console.log("Array Destructuring");

  const contohArray = ["red", "Green", "Blue"];

  const [firstColor, secondColor] = contohArray;

  const [primary, ...otherColors] = contohArray;

  console.log(firstColor, secondColor, primary, otherColors);
}

console.log("SPREAD OPERATOR");
{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combine = [...arr1, ...arr2];

  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  const updateObj = { ...obj1, b: 99 };

  console.log(combine, obj1, obj2, updateObj);
}

console.log("ARRAY METHOD");
{
  const number = [1, 2, 3, 4, 5];

  // map transform
  const doubled = number.map((num) => num * 2);
  console.log("doubled : ", doubled);

  // filter
  const even = number.filter((num) => num % 2 === 0);
  console.log("even : ", even);

  //find
  const user = [
    { id: 1, name: "ali" },
    { id: 2, name: "andi" },
    { id: 3, name: "ucok" },
  ];
  const foundUser = user.find((u) => u.id === 3);
  const foundUserIndex = user.findIndex((u) => u.name === "ucok");

  console.log("foundUser : ", foundUser);
  console.log("foundUserIndex : ", foundUserIndex);

  // reduce
  const sum = number.reduce((total, num) => total + num, 0);
  console.log("sum : ", sum);

  console.log("for each ");
  user.forEach((num) => console.log(" - ", num));
}

console.log("CONDITIONAL PATTERN");
{
  const isLogIn = true;
  const isLoaded = false;
  const item = ["item1", "item2"];
  const username = "";

  //ternary operator
  const message = isLogIn ? "Welcome" : "Please Login";
  console.log("message : ", message);

  // short circuit operator
  const displayName = username || "guest";
  const showButtonDescription = isLogIn && "In React render button";
  console.log("displayName :", displayName);
  console.log("ShowButtonDesc :", showButtonDescription);

  const renderedContent = isLoaded ? "show spinner" : "show Content";
  const renderedListDescription =
    item.length > 0 ? "renderListItem" : "dontRender";

  console.log("renderContent : ", renderedContent);
  console.log("renderListDesc : ", renderedListDescription);
}
