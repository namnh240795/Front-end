// function* OddGenerator(max_number)  {
//   let current = 1;
//   yield 1;

//   while (current <= max_number)
//     yield current+=2;
// }

// const MAX = 100;
// const oddGenerator = OddGenerator(MAX);
// let i = 0;

// console.log(oddGenerator.next().value);
// console.log(oddGenerator.next().value);

// function* id_generator(max_number){
//   console.log('max_number', max_number)

//   let index = 0;
//   function hasNext(){
//     return index <= max_number;
//   }

//   while(hasNext()){
//     yield* hasNext();
//     yield index++;
//   }
// }

// const MAX = 0;
// const ID_GENERATOR = id_generator(MAX);

// console.log(ID_GENERATOR.hasNext());

function* anotherGenerator(i) {
  console.log("start anotherGenerator", i);
  yield i + 1;
  console.log("anotherGenerator 1", i);
  yield i + 2;
  console.log("anotherGenerator 2", i);
  yield i + 3;
  console.log("anotherGenerator 3", i);
}

function* generator(i) {
  console.log("start generator", i);
  yield i;
  console.log('generator 1', i);
  yield* anotherGenerator(i);
  console.log("generator 2", i);
  yield i + 10;
  console.log("generator 3", i);
}

var gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next().value); // 12
// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 20

