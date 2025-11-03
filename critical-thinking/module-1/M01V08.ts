// data setup

function generateSimData(size: any) {
  const itemPool = [
    'Apple',
    'Mango',
    'Banana',
    'Orange',
    'Grape',
    'Strawberry',
    'Pineapple',
    'Watermelon',
    'Cherry',
    'Blueberry',
    'Apple',
    'Orange',
  ];

  const generatedData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }

  return generatedData;
}

const hugeDataSet = generateSimData(800000);

console.log('Data size', hugeDataSet.length);

// Brute Force

const arrStartTime = performance.now();

const removeDupArr = (arr: any) => {
  const newArr: any = [];

  arr.forEach((element: any) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};
console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();

console.log(`Array Implementation took ${arrEndTime - arrStartTime}ms`);

// Set implementation

const setStartTime = performance.now();

const removeDupSet = (arr: any) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupSet(hugeDataSet));

const setEndTime = performance.now();

console.log(`Set Implementation took ${setEndTime - setStartTime}ms`);
