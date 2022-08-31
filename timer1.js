// refactor after code review
const input = process.argv.slice(2).filter(time => (!isNaN(Number(time)) && time > 0));

// break down code below(old code)
// let input = process.argv.slice(2)
// let input = input.filter(time => time > 0).filter(Number) 
// console.log(input);

for (const time of input) {
  setTimeout((time) => {
    process.stdout.write('. \n'); // create new line per 'beep'
  }, time * 1000); // *1000 to convert input into seconds
}