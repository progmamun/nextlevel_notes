const startTime = performance.now();

for (let i = 0; i <= 5000; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`This code took: ${endTime - startTime} ms`);
// ------------
const removeDupSet = (arr: string) => {
  const set = new Set(arr);
  return Array.from(set);
};
