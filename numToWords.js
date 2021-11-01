// numToWords function will return the text value of whatever number provided by
// the user in the first parameter. The second parameter dictates where the
// function will count from. The default value of the second parameter will
// match the value of the first.

function numToWords(num, start = num) {
  // Used to reverse "num" in order to iterate backwards from the ones position
  function reverseString(str) {
    const splStr = str.split("");
    const revSpl = splStr.reverse();
    const reverse = revSpl.join("");
    return reverse;
  }

  // words that will comprise final written number are stored here
  let numArrs = {
    hundreds: [],
    thousands: [],
    millions: [],
    billions: [],
    trillions: [],
  };

  // This function generates a word based on each digit in the number and pushes
  // that word to numArrs
  function pushToArr(number, index, name) {
    const plural = name + "s";
    const currentDigit = number[index];

    switch (true) {
      // Ones
      case index == 0 || index % 3 == 0:
        if (index == 0) {
          if (currentDigit == "0") {
            break;
          }
          numArrs[plural].push(ones[currentDigit]);
        } else {
          // omit the place name if there are no numbers in the place value
          // group.
          if (
            currentDigit == "0" &&
            number[index + 1] == "0" &&
            number[index + 2] == "0"
          ) {
            break;
          }
          numArrs[plural].push(name);
          // If currentDigit equals 0 nothing will be pushed.
          if (currentDigit != "0") {
            numArrs[plural].push(ones[currentDigit]);
          }
        }
        break;

      // Tens
      case index == 1 || (index - 1) % 3 == 0:
        if (currentDigit == "0") {
          break;
        }
        // Swap out word in ones position and replace with word from the 'teens' array.
        if (currentDigit == "1") {
          let ones = number[index - 1];
          if (numArrs[plural][ones] != name) {
            numArrs[plural].pop();
          }
          numArrs[plural].push(teens[ones]);
        } else {
          numArrs[plural].push(tens[currentDigit]);
        }
        break;

      // Hundreds
      case index == 2 || (index - 2) % 3 == 0:
        if (index == 2) {
          // add 'and' after the ones and tens words in the 'hundreds' place
          // value group.
          if (number[0] != "0" || number[1] != "0") {
            numArrs[plural].push("and");
          }
          if (currentDigit != "0") {
            numArrs[plural].push("hundred");
            numArrs[plural].push(ones[currentDigit]);
          }
          break;
        } else if (currentDigit == "0") {
          break;
        } else {
          numArrs[plural].push("hundred");
          numArrs[plural].push(ones[currentDigit]);
        }
        break;
    }
  }

  // these 3 lists contain the words that will be indexed to match the digits
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

  // iterate through num.
  for (let i = start; i <= num; i++) {
    numArrs = {
      hundreds: [],
      thousands: [],
      millions: [],
      billions: [],
      trillions: [],
    };

    let currNum = i.toString();
    let numLength = currNum.length;
    let revNum = reverseString(currNum);

    // get value of each digit in currNum.
    let place = 0; // iterate digit by digit through current number.
    for (let digit = 0; digit < numLength; digit++) {
      switch (true) {
        // hundreds
        case place < 3:
          pushToArr(revNum, place, "hundred");
          break;
        // thousands
        case place < 6:
          pushToArr(revNum, place, "thousand");

          break;
        // millions
        case place < 9:
          pushToArr(revNum, place, "million");
          break;
        // trillions
        default:
          pushToArr(revNum, place, "trillion");
          break;
      }
      place++;
    }

    // Reverse contents of numArrs so words are in proper order.
    let hund = numArrs["hundreds"].reverse();
    let thou = numArrs["thousands"].reverse();
    let mil = numArrs["millions"].reverse();
    let bil = numArrs["billions"].reverse();
    let tril = numArrs["trillions"].reverse();

    // Move sub-arrays into one and combine contents.
    let returnArr = [tril, bil, mil, thou, hund];
    let returnNum = returnArr.flat();
    console.log(returnNum.join(" "));
  }
}
