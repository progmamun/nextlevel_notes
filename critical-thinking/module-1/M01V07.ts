const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log('first array', firstArray.length);
console.log('second array', secondArray.length);

const firstUserList = firstArray.map((number) => ({ userId: number }));

const secondUserList = secondArray.map((number) => ({ userId: number }));

console.time('find');

// const user = secondUserList.find((user) => user.userId === 500000);

const user = secondUserList[400000];

console.timeEnd('find');
