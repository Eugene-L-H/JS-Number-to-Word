function countTo(start = 1, num) {
  function reverseString(str) {
    const splStr = str.split("");
    const revSpl = splStr.reverse();
    const reverse = revSpl.join("");
    return reverse;
  }

  let numArrs = {
    hundreds: [],
    thousands: [],
    millions: [],
    billions: [],
    trillions: [],
  };

  function pushToArr(number, ind, name) {
    const plural = name + "s";
    const cD = number[count];

    switch (true) {
      case ind == 0 || ind % 3 == 0:
        numArrs[`${plural}`].push(ones[cD] + ` ${name}`);
        break;

      case ind == 1 || (ind - 1) % 3 == 0:
        if (cD == "0") {
          break;
        }
        if (cD == "1") {
          let ones = number[count - 1];
          numArrs[`${plural}`].pop();
          numArrs[`${plural}`].push(teens[ones]);
        } else {
          numArrs[`${plural}`].push(tens[cD]);
        }
        break;

      case ind == 2 || (ind - 2) % 3 == 0:
        if (cD == "0") {
          numArrs[`${plural}`].push(ones[cD]);
        } else {
          numArrs[`${plural}`].push(ones[cD] + " hundred");
        }
        break;
    }
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
    numArrs = {
      hundreds: [],
      thousands: [],
      millions: [],
      billions: [],
      trillions: [],
    };

    let currNum = i.toString();
    let revNum = reverseString(currNum);

    // get value of each digit in currNum.
    let count = 0; // iterate digit by digit through revent numberl
    for (let digit = 0; digit < currNum.length; digit++) {
      let curDig = revNum[count]; // current number in iteration.

      switch (true) {
        // hundreds
        case count < 3:
          pushToArr(revNum, count, "hundred");
          break;
        // thousands
        case count < 6:
          pushToArr(revNum, count, "thousand");
          break;
        // millions
        case count < 9:
          pushToArr(revNum, count, "million");
          break;
        // trillions
        default:
          pushToArr(revNum, count, "trillion");
          break;
        // case 0:
        //   numArrs["hundreds"].push(ones[curDig]);
        //   break;

        // case 1:
        //   if (curDig == "0") {
        //     break;
        //   }
        //   if (curDig == "1") {
        //     let ones = revNum[count - 1];
        //     numArrs["hundreds"].pop();
        //     numArrs["hundreds"].push(teens[ones]);
        //   } else {
        //     numArrs["hundreds"].push(tens[curDig]);
        //   }
        //   break;

        // case 2:
        //   if (curDig == "0") {
        //     numArrs["hundreds"].push(ones[curDig]);
        //   } else {
        //     numArrs["hundreds"].push(ones[curDig] + " hundred");
        //   }
        //   break;

        // // thousands
        // case 3:
        //   numArrs["thousands"].push(ones[curDig] + " thousand,");
        //   break;

        // case 4:
        //   if (curDig == "0") {
        //     break;
        //   }
        //   if (curDig == "1") {
        //     let ones = revNum[count - 1];
        //     numArrs["thousands"].pop();
        //     numArrs["thousands"].push(teens[ones]);
        //   } else {
        //     numArrs["thousands"].push(tens[curDig]);
        //   }
        //   break;

        // case 5:
        //   if (curDig == "0") {
        //     numArrs["thousands"].push(ones[curDig]);
        //   } else {
        //     numArrs["thousands"].push(ones[curDig] + " hundred");
        //   }
        //   break;

        // // millions
        // case 6:
        //   numArrs["millions"].push(ones[curDig] + " million ");
        //   break;

        // case 7:
        //   if (curDig == "1") {
        //     let ones = revNum[count - 1];
        //     numArrs["millions"].pop();
        //     numArrs["millions"].push(teens[ones]);
        //   } else {
        //     numArrs["millions"].push(tens[curDig]);
        //   }
        //   break;

        // case 8:
        //   if (curDig == "0") {
        //     numArrs["millions"].push(ones[curDig]);
        //   } else {
        //     numArrs["millions"].push(ones[curDig] + " hundred");
        //   }
        //   break;

        // // billions
        // case 9:
        //   numArrs["billions"].push(ones[curDig] + " billion,");
        //   break;

        // case 10:
        //   if (curDig == "1") {
        //     let ones = revNum[count - 1];
        //     numArrs["billions"].pop();
        //     numArrs["billions"].push(teens[ones]);
        //   } else {
        //     numArrs["billions"].push(tens[curDig]);
        //   }
        //   break;

        // case 11:
        //   if (curDig == "0") {
        //     numArrs["billions"].push(ones[curDig]);
        //   } else {
        //     numArrs["billions"].push(ones[curDig] + " hundred");
        //   }
        //   break;

        // // trillions
        // case 12:
        //   numArrs["trillions"].push(ones[curDig] + " trillion,");
        //   break;

        // case 13:
        //   if (curDig == "1") {
        //     let ones = revNum[count - 1];
        //     numArrs["trillions"].pop();
        //     numArrs["trillions"].push(teens[ones]);
        //   } else {
        //     numArrs["trillions"].push(tens[curDig]);
        //   }
        //   break;

        // case 14:
        //   if (curDig == "0") {
        //     numArrs["trillions"].push(ones[curDig]);
        //   } else {
        //     numArrs["trillions"].push(ones[curDig] + " hundred");
        //   }
        //   break;
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

countTo(1, 1000);
