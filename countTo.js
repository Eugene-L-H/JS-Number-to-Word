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

  function pushToArr(number, index, name) {
    const plural = name + "s";
    const currentDigit = number[index];

    switch (true) {
      case index == 0 || index % 3 == 0:
        if (index < 3) {
          if (currentDigit == "0") {
            break;
          }
          numArrs[plural].push(ones[currentDigit]);
        } else {
          if (currentDigit != "0") {
            numArrs[plural].push(name);
            numArrs[plural].push(ones[currentDigit]);
          }
        }
        break;

      case index == 1 || (index - 1) % 3 == 0:
        if (currentDigit == "0") {
          break;
        }
        if (currentDigit == "1") {
          let ones = number[index - 1];
          numArrs[plural].pop();
          numArrs[plural].push(teens[ones]);
        } else {
          numArrs[plural].push(tens[currentDigit]);
        }
        break;

      case index == 2 || (index - 2) % 3 == 0:
        if (currentDigit == "0" && number[0] == "0" && number[1] == 0) {
          break;
        } else {
          if (index == 2) {
            if (number[0] == "0" && number[1] == "0") {
              break;
            }
            numArrs["hundreds"].push("and");
          }
          if (currentDigit != "0") {
            numArrs[plural].push("hundred");
            numArrs[plural].push(ones[currentDigit]);
          }
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
    let numLength = currNum.length;
    let revNum = reverseString(currNum);

    // get value of each digit in currNum.
    let place = 0; // iterate digit by digit through current number
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

    // add "and". Ex 'Four thousand "and" twenty'

    let hund = numArrs["hundreds"].reverse();
    let thou = numArrs["thousands"].reverse();
    let mil = numArrs["millions"].reverse();
    let bil = numArrs["billions"].reverse();
    let tril = numArrs["trillions"].reverse();

    // let returnNum = tril.concat(bil).concat(mil).concat(thou).concat(hund);
    let returnArr = [tril, bil, mil, thou, hund];
    let returnNum = returnArr.flat();
    console.log(returnNum.join(" "));
  }
}

countTo(1, 1000001);
