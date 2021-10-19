function countTo(start = 1, num) {
  function reverseString(str) {
    const splStr = str.split("");
    const revSpl = splStr.reverse();
    const reverse = revSpl.join("");
    return reverse;
  }

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  // iterate through num
  for (let i = start; i <= num; i++) {
    let numArrs = {
      hundreds: [],
      thousands: [],
      millions: [],
      billions: [],
      trillions: [],
    };

    let currNum = i.toString();

    // get value of each digit in currNum.
    let count = 0; // iterate digit by digit through revent numberl
    for (let digit = 0; digit < currNum.length; digit++) {
      let revNum = reverseString(currNum);

      switch (count) {
        // hundreds
        case 0:
          numArrs["hundreds"].push(ones[revNum[count]]);
          break;

        case 1:
          if (revNum[count] == "1") {
            let ones = revNum[count - 1];
            numArrs["hundreds"].pop();
            numArrs["hundreds"].push(teens[ones]);
          } else {
            numArrs["hundreds"].push(tens[revNum[count]]);
          }
          break;

        case 2:
          if (revNum[count] == "0") {
            numArrs["hundreds"].push(ones[revNum[count]]);
          } else {
            numArrs["hundreds"].push(ones[revNum[count]] + " hundred");
          }
          break;

        // thousands
        case 3:
          numArrs["thousands"].push(ones[revNum[count]] + " thousand, ");
          break;

        case 4:
          if (revNum[count] == "1") {
            let ones = revNum[count - 1];
            numArrs["thousands"].pop();
            numArrs["thousands"].push(teens[ones]);
          } else {
            numArrs["thousands"].push(tens[revNum[count]]);
          }
          break;

        case 5:
          if (revNum[count] == "0") {
            numArrs["thousands"].push(ones[revNum[count]]);
          } else {
            numArrs["thousands"].push(ones[revNum[count]] + " hundred");
          }
          break;

        // millions
        case 6:
          numArrs["millions"].push(ones[revNum[count]] + " million ");
          break;

        case 7:
          if (revNum[count] == "1") {
            let ones = revNum[count - 1];
            numArrs["millions"].pop();
            numArrs["millions"].push(teens[ones]);
          } else {
            numArrs["millions"].push(tens[revNum[count]]);
          }
          break;

        case 8:
          if (revNum[count] == "0") {
            numArrs["millions"].push(ones[revNum[count]]);
          } else {
            numArrs["millions"].push(ones[revNum[count]] + " hundred");
          }
          break;

        // billions
        case 9:
          numArrs["billions"].push(ones[revNum[count]] + " billion,");
          break;

        case 10:
          if (revNum[count] == "1") {
            let ones = revNum[count - 1];
            numArrs["billions"].pop();
            numArrs["billions"].push(teens[ones]);
          } else {
            numArrs["billions"].push(tens[revNum[count]]);
          }
          break;

        case 11:
          if (revNum[count] == "0") {
            numArrs["billions"].push(ones[revNum[count]]);
          } else {
            numArrs["billions"].push(ones[revNum[count]] + " hundred");
          }
          break;

        // trillions
        case 12:
          numArrs["trillions"].push(ones[revNum[count]] + " trillion,");
          break;

        case 13:
          if (revNum[count] == "1") {
            let ones = revNum[count - 1];
            numArrs["trillions"].pop();
            numArrs["trillions"].push(teens[ones]);
          } else {
            numArrs["trillions"].push(tens[revNum[count]]);
          }
          break;

        case 14:
          if (revNum[count] == "0") {
            numArrs["trillions"].push(ones[revNum[count]]);
          } else {
            numArrs["trillions"].push(ones[revNum[count]] + " hundred");
          }
          break;
      }
      count++;
    }
    let hund = numArrs["hundreds"].reverse().join(" ");
    let thou = numArrs["thousands"].reverse().join(" ");
    let mil = numArrs["millions"].reverse().join(" ");
    let bil = numArrs["billions"].reverse().join(" ");
    let tril = numArrs["trillions"].reverse().join(" ");

    let returnNum = tril + bil + mil + thou + hund;

    console.log(returnNum);
  }
}
