
const expect = (a: string) => {
  console.log("expect called");
}

export function greet(name: string) {
  expect("hello");
  return `Hello! ${name}.`;
}

export function sayGoodBye(name: string) {
  throw new Error("未実装");
}
