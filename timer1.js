let input = process.argv.slice(2);
input = input.filter(time => time > 0).filter(Number);
// input = input.filter(Number) // move this code to above
console.log(input);

let count = 0;
for (const time of input) {
  setTimeout((time) => {
    process.stdout.write('. \n'); // create new line per 'beep'
  }, count += time * 1000); // *1000 to convert input into seconds
}