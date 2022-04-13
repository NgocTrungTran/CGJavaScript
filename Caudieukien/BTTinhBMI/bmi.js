function count() {
let weight = parseFloat(document.getElementById('weight').value);
let height = parseFloat(document.getElementById('height').value);
let bmi = weight / (height * height);
// document.getElementById('bmi').value = bmi;
document.write("BMI is: " + bmi + " Interpretation: ");
if (bmi < 18.5) {
    document.write("Underweight");
} else if (bmi < 25.0) {
    document.write("Nomal");
} else if (bmi < 30) {
    document.write("Overweight")
} else {
    document.write("Obese")
}
}