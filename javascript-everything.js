function sum(n) {
    if (typeof n !== "number" || n % 1 !== 0) {
        return " The value passed isn't a number! ";
    }
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total = total + i;
    }
    return total;
}

console.log(sum(4.1932));

function factorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i;
    }
    console.log(result);
}
factorial(8);

function funkyMath(a, b, c, d) {
    if (arguments.length === 2) {
        return a + b + c;
    }
    else if (arguments.length === 4) {
        let firstPair = a + b;
        let secondPair = c + d;
        return firstPair/secondPair;
    }
    else {
        return " This function only works with 2, 3, or 4 numbers! ";
    }
}

console.log(funkyMath(21));

let numbers = [1, 2, 33, 45, 6, 99];
let oddNumbers = [];

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2  !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log(" Odd numbers sorted: ", oddNumbers);

let me = {
    firstName: "Moegamad Mujahid",
    lastName: " Ariefdien ",
    age: 18,
    favouriteColour: " Purple ",
    dreamCar: " BMW E30 M3"
};

me.favouriteFood = " Pizza ";
delete me.age;
console.log(me);