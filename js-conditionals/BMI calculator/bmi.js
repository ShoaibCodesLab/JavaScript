// BMI Calculator using Node.js terminal input

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your weight in kg: ", function (weight) {
  rl.question("Enter your height in cm: ", function (height) {

    weight = Number(weight);
    height = Number(height);

    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
      console.log("❌ Invalid input! Please enter valid numbers.");
    } else {
      height = height / 100; // cm to meter
      const bmi = weight / (height * height);

      if (bmi < 18.5) {
        console.log(`Your BMI is ${bmi.toFixed(2)} (Underweight)`);
      } else if (bmi < 25) {
        console.log(`Your BMI is ${bmi.toFixed(2)} (Normal weight)`);
      } else if (bmi < 30) {
        console.log(`Your BMI is ${bmi.toFixed(2)} (Overweight)`);
      } else {
        console.log(`Your BMI is ${bmi.toFixed(2)} (Obese)`);
      }
    }

    rl.close();
  });
});
