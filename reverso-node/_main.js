// ESM syntax is supported.
// export {}

// function main() {
//   console.log('Hello world');
// }

async function doSomething() {
  console.log('In five seconds...');
  return new Promise((res) => {
    setTimeout(() => {
      console.log('I will resolve');
      res();
    }, 5000);
  })
}

console.log('Hello world');

await doSomething();