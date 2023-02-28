let c = ")()";

console.log(c.length);

let count = 0;

for (let i = 0; i < c.length; i++) {
  if (c[i] == "(") {
    count++;
  }
  if (c[i] == ")") {
    count = count + 1;
  }
  if (count < 0) {
    // console.log(false);
    break;
  }
}

console.log(count);

if (count != 0) {
  console.log("true");
} else {
  console.log(true);
}
