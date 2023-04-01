function calculateBMI() {
  // Get weight and height inputs from user
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  // Calculate BMI
  const bmi = weight / (height * height);

  // Display the result
  document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(
    2
  )}.`;

  // Classify the BMI
  if (bmi < 18.5) {
    document.getElementById("classification").innerHTML = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    document.getElementById("classification").innerHTML = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById("classification").innerHTML = "Overweight";
  } else {
    document.getElementById("classification").innerHTML = "Obese";
  }
}
