// BMI Calculator using console input

// Step 1: Take input
let weight = prompt("Enter your weight in kg:");
let height = prompt("Enter your height in cm:");

// Step 2: Convert string to number
weight = Number(weight);
height = Number(height);

// Step 3: Validate input
if (weight <= 0 || height <= 0) {
  console.log("❌ Invalid input! Weight and height must be positive numbers.");
} else {
  // Step 4: Convert height cm to meter
  height = height / 100;

  // Step 5: Calculate BMI
  let bmi = weight / (height * height);

  // Step 6: Determine category
  if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi.toFixed(2)} (Underweight)`);
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log(`Your BMI is ${bmi.toFixed(2)} (Normal weight)`);
  } else if (bmi >= 25 && bmi < 30) {
    console.log(`Your BMI is ${bmi.toFixed(2)} (Overweight)`);
  } else {
    console.log(`Your BMI is ${bmi.toFixed(2)} (Obese)`);
  }
}
