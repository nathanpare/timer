//No numbers are provided: Easy. It should just not beep at all
//and end immediately since no beeps should get scheduled.
//An input is a negative number: Ignore/skip any numbers that are negative.
//We can't schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of
//attempting to call setTimeout with a non-number.

//setting up REPL functionality
const args = process.argv;
const sliceNumbers = args.slice(2);
//iterating over sliceNumbers
for (const number of sliceNumbers) {
  //handling edge cases
  if (typeof parseInt(number) === "number") {
    //delay
    setTimeout(() => {
      //beep noise
      process.stdout.write('\x07');
      //delaying each beep by the "number" of seconds
    },number * 1000);
  }
}

console.log(sliceNumbers);

