// Function to convert Celsius to Fahrenheit
function convertToFahrenheit() {
    // Get input value
    var celsius = document.getElementById("celsius-input").value;

    // Check if input is empty or not a number
    if (celsius === "" || isNaN(celsius)) {
        alert("Please enter a valid number for Celsius.");
        return;
    }

    // Calculate Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Display result in Fahrenheit input
    document.getElementById("fahrenheit-input").value = fahrenheit.toFixed(2);

    // Display calculation
    var calculation = `${celsius} °C × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("calculation").value = calculation;
}

// Function to reset all fields
function resetFields() {
    document.getElementById("celsius-input").value = "";
    document.getElementById("fahrenheit-input").value = "";
    document.getElementById("calculation").value = "";
}

// Function to reverse conversion (toggle between Celsius and Fahrenheit)
function reverseConversion() {
    var celsiusInput = document.getElementById("celsius-input");
    var fahrenheitInput = document.getElementById("fahrenheit-input");

    // Swap values
    var temp = celsiusInput.value;
    celsiusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = temp;

    // Update calculation if values are valid
    if (!isNaN(celsiusInput.value)) {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = (celsius * 9/5) + 32;
        var calculation = `${celsius} °C × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
        document.getElementById("calculation").value = calculation;
    } else if (!isNaN(fahrenheitInput.value)) {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        var celsius = (fahrenheit - 32) * 5/9;
        var calculation = `${fahrenheit} °F - 32 × 5/9 = ${celsius.toFixed(2)} °C`;
        document.getElementById("calculation").value = calculation;
    } else {
        document.getElementById("calculation").value = "";
    }
}
