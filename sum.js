const args = process.argv.slice(2);
//console.log(args.slice(2));

let sum = 0;
args.forEach(element => {
  sum += Number(element);
});


console.log(sum);