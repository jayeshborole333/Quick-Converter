// Conversion Form Constant Variables
const lengthForm = document.getElementById('length');
const temperatureForm = document.getElementById('temperature');
const areaForm = document.getElementById('area');
const volumeFrom = document.getElementById("volume")
const weightForm = document.getElementById('weight');
const timeForm = document.getElementById('time');

// Hide Form
temperatureForm.style.display = "none";
lengthForm.style.display = "none";
areaForm.style.display = "none";
volumeFrom.style.display = "none";
volumeFrom.style.display = "none"
weightForm.style.display = "none";
timeForm.style.display = "none";

// Display Form by Category
const conversionCategory = document.getElementById('conversionCategory');

conversionCategory.addEventListener('change', function() {
    const conversionValue = conversionCategory.value;
    
    // If statement for form display
    if (conversionValue === "temperature") {
        temperatureForm.style.display = "";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "none";
    } else if (conversionValue === "length") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "none";
    } else if (conversionValue === "area") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "";
        weightForm.style.display = "none";
        timeForm.style.display = "none";   
    } 
    else if (conversionValue === "volume") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        volumeFrom.style.display = "";
        weightForm.style.display = "none";
        timeForm.style.display = "none";   
    } else if (conversionValue === "weight") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "";
        timeForm.style.display = "none";   
    } else if (conversionValue === "time") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "";   
    } else {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "none";
    };
});

// Temperature Function
function convertTemperature() {
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromTemperatureUnit").value;
    const toUnit = document.getElementById("toTemperatureUnit").value;

    // Perform the conversion
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputValue - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputValue - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
    } else {
        result = inputValue;
    }

    // Display the result
    document.getElementById("temperatureResult").textContent = `Result: ${result.toFixed(2)}`;
};

// Area Conversion
function convertArea() {
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("areaInput").value);
    const fromUnit = document.getElementById("fromAreaUnit").value;
    const toUnit = document.getElementById("toAreaUnit").value;

    // Define conversion factors for various units (1 square meter as the base unit)
    const conversionFactors = {
        sqMeter: 1,
        sqKilometer: 0.000001,
        sqCentimeter: 10000,
        sqMillimeter: 1000000,
        acre: 0.000247105,
        hectare: 0.0001,
        sqMile: 3.861e-7,
        sqYard: 1.19599,
        sqFoot: 10.7639,
        sqInch: 1550.0031
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("areaResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Volume Conversion Rates (Base: Cubic Meter)
const conversionRates = {
    cubic_meter: 1.0,
    cubic_kilometer: 1.0E9,
    cubic_centimeter: 1.0E-6,
    cubic_millimeter: 1.0E-9,
    liter: 0.001,
    milliliter: 1.0E-6,
    us_gallon: 0.00378541,
    us_quart: 0.000946353,
    us_pint: 0.000473176,
    us_cup: 0.00024,
    us_fluid_ounce: 2.95735E-5,
    us_tablespoon: 1.47868E-5,
    us_teaspoon: 4.92892E-6,
    imperial_gallon: 0.00454609,
    imperial_quart: 0.00113652,
    imperial_pint: 0.000568261,
    imperial_fluid_ounce: 2.84131E-5,
    imperial_tablespoon: 1.77582E-5,
    imperial_teaspoon: 5.91939E-6,
    cubic_mile: 4.16818E9,
    cubic_yard: 0.764555,
    cubic_foot: 0.0283168
};

function swapUnits(fromId, toId) {
    let fromUnit = document.getElementById(fromId);
    let toUnit = document.getElementById(toId);
    let temp = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = temp;
}

function convertVolume() {
    const value = parseFloat(document.getElementById("volumeInput").value);
    const fromUnit = document.getElementById("fromVolumeUnit").value;
    const toUnit = document.getElementById("toVolumeUnit").value;
    
    if (isNaN(value)) {
        document.getElementById("volumeResult").innerText = "Please enter a valid number";
        return;
    }
    
    const valueInCubicMeters = value * conversionRates[fromUnit];
    const convertedValue = valueInCubicMeters / conversionRates[toUnit];
    document.getElementById("volumeResult").innerText = `${value} ${fromUnit.replace('_', ' ')} = ${convertedValue.toFixed(6)} ${toUnit.replace('_', ' ')}`;
}

// Weight Conversion
function convertWeight() {
    const inputValue = parseFloat(document.getElementById("weightInput").value);
    const fromUnit = document.getElementById("fromWeightUnit").value;
    const toUnit = document.getElementById("toWeightUnit").value;

    const conversionFactors = {
        gram: 1,
        kilogram: 0.001,
        milligram: 1000,
        metricTon: 0.000001,
        longTon: 0.000984207,
        shortTon: 0.00110231,
        pound: 0.00220462,
        ounce: 0.03527396,
        carat: 5
    };

    if (!conversionFactors[fromUnit] || !conversionFactors[toUnit]) {
        document.getElementById("weightResult").textContent = "Invalid unit selected!";
        return;
    }

    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);
    document.getElementById("weightResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Length Conversion
function convertLength() {
    // Get the input value, and selected units
    const inputValue = parseFloat(document.getElementById("lengthInput").value);
    const fromUnit = document.getElementById("fromLengthUnit").value;
    const toUnit = document.getElementById("toLengthUnit").value;

    // Define conversion factors for various units (1 meter as the base unit)
    const conversionFactors = {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        micrometer: 1000000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("lengthResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function swapUnits(fromId, toId) {
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
}

// Time Conversion
function convertTime() {
    // Get the input value, and selected units
    const inputValue = parseFloat(document.getElementById("timeInput").value);
    const fromUnit = document.getElementById("fromTimeUnit").value;
    const toUnit = document.getElementById("toTimeUnit").value;

    // Define conversion factors for various units (1 second as the base unit)
    const conversionFactors = {
        second: 1,
        millisecond: 1000,
        minute: 1 / 60,
        hour: 1 / 3600,
        day: 1 / 86400,
        week: 1 / 604800,
        month: 1 / 2628000,
        year: 1 / 31536000
    };

    // Perform the conversion
    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    // Display the result
    document.getElementById("timeResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}
