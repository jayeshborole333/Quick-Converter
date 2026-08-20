// ============================================================
// QUICK CONVERTER - COMPLETE SCRIPT.JS
// ============================================================


// ============================================================
// GET CONVERSION FORMS
// ============================================================

const lengthForm = document.getElementById("length");
const temperatureForm = document.getElementById("temperature");
const areaForm = document.getElementById("area");
const volumeForm = document.getElementById("volume");
const weightForm = document.getElementById("weight");
const timeForm = document.getElementById("time");

const conversionCategory =
    document.getElementById("conversionCategory");


// ============================================================
// ALL FORMS
// ============================================================

const allForms = [
    temperatureForm,
    lengthForm,
    areaForm,
    volumeForm,
    weightForm,
    timeForm
];


// ============================================================
// HIDE ALL FORMS
// ============================================================

function hideAllForms() {

    allForms.forEach(form => {

        if (form) {
            form.style.display = "none";
        }

    });

}

hideAllForms();


// ============================================================
// SHOW SELECTED CATEGORY
// ============================================================

if (conversionCategory) {

    conversionCategory.addEventListener("change", function () {

        const category = this.value;

        hideAllForms();

        if (category === "temperature" && temperatureForm) {

            temperatureForm.style.display = "";

        }

        else if (category === "length" && lengthForm) {

            lengthForm.style.display = "";

        }

        else if (category === "area" && areaForm) {

            areaForm.style.display = "";

        }

        else if (category === "volume" && volumeForm) {

            volumeForm.style.display = "";

        }

        else if (category === "weight" && weightForm) {

            weightForm.style.display = "";

        }

        else if (category === "time" && timeForm) {

            timeForm.style.display = "";

        }

    });

}


// ============================================================
// HELPER - CHECK NUMBER
// ============================================================

function isValidNumber(value) {

    return value !== "" && !isNaN(value);

}


// ============================================================
// HELPER - FORMAT RESULT
// ============================================================

function formatResult(value) {

    if (!Number.isFinite(value)) {
        return "Invalid";
    }

    return Number(value.toFixed(10)).toLocaleString(
        "en-US",
        {
            maximumFractionDigits: 10
        }
    );

}


// ============================================================
// HELPER - UNIT NAMES
// ============================================================

function getUnitName(unit) {

    const names = {

        // Temperature
        celsius: "Celsius",
        fahrenheit: "Fahrenheit",
        kelvin: "Kelvin",

        // Area
        sqMeter: "Square Meter",
        sqKilometer: "Square Kilometer",
        sqCentimeter: "Square Centimeter",
        sqMillimeter: "Square Millimeter",
        acre: "Acre",
        hectare: "Hectare",
        sqMile: "Square Mile",
        sqYard: "Square Yard",
        sqFoot: "Square Foot",
        sqInch: "Square Inch",

        // Volume
        cubic_meter: "Cubic Meter",
        cubic_kilometer: "Cubic Kilometer",
        cubic_centimeter: "Cubic Centimeter",
        cubic_millimeter: "Cubic Millimeter",
        liter: "Liter",
        milliliter: "Milliliter",
        us_gallon: "US Gallon",
        us_quart: "US Quart",
        us_pint: "US Pint",
        us_cup: "US Cup",
        us_fluid_ounce: "US Fluid Ounce",
        us_tablespoon: "US Tablespoon",
        us_teaspoon: "US Teaspoon",
        imperial_gallon: "Imperial Gallon",
        imperial_quart: "Imperial Quart",
        imperial_pint: "Imperial Pint",
        imperial_fluid_ounce: "Imperial Fluid Ounce",
        imperial_tablespoon: "Imperial Tablespoon",
        imperial_teaspoon: "Imperial Teaspoon",
        cubic_mile: "Cubic Mile",
        cubic_yard: "Cubic Yard",
        cubic_foot: "Cubic Foot",

        // Weight
        gram: "Gram",
        kilogram: "Kilogram",
        milligram: "Milligram",
        metricTon: "Metric Ton",
        longTon: "Long Ton",
        shortTon: "Short Ton",
        pound: "Pound",
        ounce: "Ounce",
        carat: "Carat",

        // Length
        meter: "Meter",
        kilometer: "Kilometer",
        centimeter: "Centimeter",
        millimeter: "Millimeter",
        micrometer: "Micrometer",
        mile: "Mile",
        yard: "Yard",
        foot: "Foot",
        inch: "Inch",

        // Time
        second: "Second",
        millisecond: "Millisecond",
        minute: "Minute",
        hour: "Hour",
        day: "Day",
        week: "Week",
        month: "Month",
        year: "Year"

    };

    return names[unit] || unit;

}


// ============================================================
// HISTORY SYSTEM
// ============================================================

function saveHistory(
    category,
    input,
    fromUnit,
    toUnit,
    result
) {

    let history = JSON.parse(
        localStorage.getItem("quickConverterHistory") || "[]"
    );


    const newItem = {

        category: category,

        input: input,

        from: fromUnit,

        to: toUnit,

        result: result,

        date: new Date().toLocaleString()

    };


    history.unshift(newItem);


    // Keep only latest 20 conversions
    history = history.slice(0, 20);


    localStorage.setItem(
        "quickConverterHistory",
        JSON.stringify(history)
    );

}


// ============================================================
// TEMPERATURE CONVERTER
// ============================================================

function convertTemperature() {

    const inputElement =
        document.getElementById("temperatureInput");

    const resultElement =
        document.getElementById("temperatureResult");


    const inputValue =
        parseFloat(inputElement.value);

    const fromUnit =
        document.getElementById(
            "fromTemperatureUnit"
        ).value;

    const toUnit =
        document.getElementById(
            "toTemperatureUnit"
        ).value;


    if (!isValidNumber(inputElement.value)) {

        resultElement.textContent =
            "Result: Please enter a valid number.";

        return;

    }


    let result;


    if (
        fromUnit === "celsius" &&
        toUnit === "fahrenheit"
    ) {

        result =
            (inputValue * 9 / 5) + 32;

    }

    else if (
        fromUnit === "celsius" &&
        toUnit === "kelvin"
    ) {

        result =
            inputValue + 273.15;

    }

    else if (
        fromUnit === "fahrenheit" &&
        toUnit === "celsius"
    ) {

        result =
            (inputValue - 32) * 5 / 9;

    }

    else if (
        fromUnit === "fahrenheit" &&
        toUnit === "kelvin"
    ) {

        result =
            (inputValue - 32) * 5 / 9 + 273.15;

    }

    else if (
        fromUnit === "kelvin" &&
        toUnit === "celsius"
    ) {

        result =
            inputValue - 273.15;

    }

    else if (
        fromUnit === "kelvin" &&
        toUnit === "fahrenheit"
    ) {

        result =
            (inputValue - 273.15) * 9 / 5 + 32;

    }

    else {

        result = inputValue;

    }


    const formattedResult =
        formatResult(result);


    resultElement.textContent =
        `Result: ${formattedResult} ${getUnitName(toUnit)}`;


    saveHistory(
        "Temperature",
        inputValue,
        getUnitName(fromUnit),
        getUnitName(toUnit),
        formattedResult
    );

}


// ============================================================
// AREA CONVERTER
// ============================================================

function convertArea() {

    const inputElement =
        document.getElementById("areaInput");

    const inputValue =
        parseFloat(inputElement.value);


    const fromUnit =
        document.getElementById(
            "fromAreaUnit"
        ).value;

    const toUnit =
        document.getElementById(
            "toAreaUnit"
        ).value;


    const resultElement =
        document.getElementById("areaResult");


    if (!isValidNumber(inputElement.value)) {

        resultElement.textContent =
            "Result: Please enter a valid number.";

        return;

    }


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


    const result =
        inputValue *
        (
            conversionFactors[toUnit] /
            conversionFactors[fromUnit]
        );


    const formattedResult =
        formatResult(result);


    resultElement.textContent =
        `Result: ${formattedResult} ${getUnitName(toUnit)}`;


    saveHistory(
        "Area",
        inputValue,
        getUnitName(fromUnit),
        getUnitName(toUnit),
        formattedResult
    );

}


// ============================================================
// VOLUME CONVERSION RATES
// ============================================================

const conversionRates = {

    cubic_meter: 1,

    cubic_kilometer: 1.0E9,

    cubic_centimeter: 1.0E-6,

    cubic_millimeter: 1.0E-9,

    liter: 0.001,

    milliliter: 1.0E-6,

    us_gallon: 0.003785411784,

    us_quart: 0.000946352946,

    us_pint: 0.000473176473,

    us_cup: 0.0002365882365,

    us_fluid_ounce: 2.95735295625E-5,

    us_tablespoon: 1.478676478125E-5,

    us_teaspoon: 4.92892159375E-6,

    imperial_gallon: 0.00454609,

    imperial_quart: 0.0011365225,

    imperial_pint: 0.00056826125,

    imperial_fluid_ounce: 2.84130625E-5,

    imperial_tablespoon: 1.77581640625E-5,

    imperial_teaspoon: 5.91938802083E-6,

    cubic_mile: 4.168181825E9,

    cubic_yard: 0.764554857984,

    cubic_foot: 0.028316846592

};


// ============================================================
// VOLUME CONVERTER
// ============================================================

function convertVolume() {

    const inputElement =
        document.getElementById("volumeInput");


    const value =
        parseFloat(inputElement.value);


    const fromUnit =
        document.getElementById(
            "fromVolumeUnit"
        ).value;


    const toUnit =
        document.getElementById(
            "toVolumeUnit"
        ).value;


    const resultElement =
        document.getElementById("volumeResult");


    if (!isValidNumber(inputElement.value)) {

        resultElement.textContent =
            "Result: Please enter a valid number.";

        return;

    }


    const valueInCubicMeters =
        value * conversionRates[fromUnit];


    const convertedValue =
        valueInCubicMeters /
        conversionRates[toUnit];


    const formattedResult =
        formatResult(convertedValue);


    resultElement.textContent =
        `Result: ${formattedResult} ${getUnitName(toUnit)}`;


    saveHistory(
        "Volume",
        value,
        getUnitName(fromUnit),
        getUnitName(toUnit),
        formattedResult
    );

}


// ============================================================
// WEIGHT CONVERTER
// ============================================================

function convertWeight() {

    const inputElement =
        document.getElementById("weightInput");


    const inputValue =
        parseFloat(inputElement.value);


    const fromUnit =
        document.getElementById(
            "fromWeightUnit"
        ).value;


    const toUnit =
        document.getElementById(
            "toWeightUnit"
        ).value;


    const resultElement =
        document.getElementById("weightResult");


    if (!isValidNumber(inputElement.value)) {

        resultElement.textContent =
            "Result: Please enter a valid number.";

        return;

    }


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


    const result =
        inputValue *
        (
            conversionFactors[toUnit] /
            conversionFactors[fromUnit]
        );


    const formattedResult =
        formatResult(result);


    resultElement.textContent =
        `Result: ${formattedResult} ${getUnitName(toUnit)}`;


    saveHistory(
        "Weight",
        inputValue,
        getUnitName(fromUnit),
        getUnitName(toUnit),
        formattedResult
    );

}


// ============================================================
// LENGTH CONVERTER
// ============================================================

function convertLength() {

    const inputElement =
        document.getElementById("lengthInput");


    const inputValue =
        parseFloat(inputElement.value);


    const fromUnit =
        document.getElementById(
            "fromLengthUnit"
        ).value;


    const toUnit =
        document.getElementById(
            "toLengthUnit"
        ).value;


    const resultElement =
        document.getElementById("lengthResult");


    if (!isValidNumber(inputElement.value)) {

        resultElement.textContent =
            "Result: Please enter a valid number.";

        return;

    }


    const conversionFactors = {

        meter: 1,

        kilometer: 0.001,

        centimeter: 100,

        millimeter: 1000,

        micrometer: 1000000,

        mile: 0.000621371192,

        yard: 1.0936133,

        foot: 3.2808399,

        inch: 39.3700787

    };


    const result =
        inputValue *
        (
            conversionFactors[toUnit] /
            conversionFactors[fromUnit]
        );


    const formattedResult =
        formatResult(result);


    resultElement.textContent =
        `Result: ${formattedResult} ${getUnitName(toUnit)}`;


    saveHistory(
        "Length",
        inputValue,
        getUnitName(fromUnit),
        getUnitName(toUnit),
        formattedResult
    );

}


// ============================================================
// TIME CONVERTER
// ============================================================

function convertTime() {

    const inputElement =
        document.getElementById("timeInput");


    const inputValue =
        parseFloat(inputElement.value);


    const fromUnit =
        document.getElementById(
            "fromTimeUnit"
        ).value;


    const toUnit =
        document.getElementById(
            "toTimeUnit"
        ).value;


    const resultElement =
        document.getElementById("timeResult");


    if (!isValidNumber(inputElement.value)) {

        resultElement.textContent =
            "Result: Please enter a valid number.";

        return;

    }


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


    const result =
        inputValue *
        (
            conversionFactors[toUnit] /
            conversionFactors[fromUnit]
        );


    const formattedResult =
        formatResult(result);


    resultElement.textContent =
        `Result: ${formattedResult} ${getUnitName(toUnit)}`;


    saveHistory(
        "Time",
        inputValue,
        getUnitName(fromUnit),
        getUnitName(toUnit),
        formattedResult
    );

}


// ============================================================
// SWAP UNITS
// ============================================================

function swapUnits(fromId, toId) {

    const from =
        document.getElementById(fromId);

    const to =
        document.getElementById(toId);


    if (!from || !to) return;


    const temp =
        from.value;


    from.value =
        to.value;


    to.value =
        temp;


    // Automatically convert after swap
    autoConvert();

}


// ============================================================
// AUTO CONVERT
// ============================================================

function autoConvert() {

    if (!conversionCategory) return;


    const category =
        conversionCategory.value;


    if (category === "temperature") {

        const input =
            document.getElementById(
                "temperatureInput"
            );

        if (input && input.value !== "") {

            convertTemperature();

        }

    }


    else if (category === "area") {

        const input =
            document.getElementById(
                "areaInput"
            );

        if (input && input.value !== "") {

            convertArea();

        }

    }


    else if (category === "volume") {

        const input =
            document.getElementById(
                "volumeInput"
            );

        if (input && input.value !== "") {

            convertVolume();

        }

    }


    else if (category === "weight") {

        const input =
            document.getElementById(
                "weightInput"
            );

        if (input && input.value !== "") {

            convertWeight();

        }

    }


    else if (category === "length") {

        const input =
            document.getElementById(
                "lengthInput"
            );

        if (input && input.value !== "") {

            convertLength();

        }

    }


    else if (category === "time") {

        const input =
            document.getElementById(
                "timeInput"
            );

        if (input && input.value !== "") {

            convertTime();

        }

    }

}


// ============================================================
// AUTO CONVERT WHILE TYPING
// ============================================================

document
    .querySelectorAll(".conversion input")
    .forEach(input => {

        input.addEventListener(
            "input",
            function () {

                autoConvert();

            }
        );

    });


// ============================================================
// ENTER KEY = CONVERT
// ============================================================

document
    .querySelectorAll(".conversion input")
    .forEach(input => {

        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    autoConvert();

                }

            }
        );

    });


// ============================================================
// COPY RESULT
// ============================================================

function copyResult(resultId) {

    const resultElement =
        document.getElementById(resultId);


    if (!resultElement) return;


    let text =
        resultElement.textContent;


    if (
        !text ||
        text === "Result:" ||
        text.includes("Please enter")
    ) {

        alert(
            "Please convert a value first."
        );

        return;

    }


    text =
        text.replace("Result:", "").trim();


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(text)
            .then(() => {

                showMessage(
                    "✅ Result copied!"
                );

            })
            .catch(() => {

                fallbackCopy(text);

            });

    }

    else {

        fallbackCopy(text);

    }

}


// ============================================================
// COPY FALLBACK
// ============================================================

function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");


    textarea.value =
        text;


    textarea.style.position =
        "fixed";

    textarea.style.left =
        "-999999px";


    document.body.appendChild(
        textarea
    );


    textarea.select();


    try {

        document.execCommand(
            "copy"
        );

        showMessage(
            "✅ Result copied!"
        );

    }

    catch (error) {

        alert(
            "Unable to copy result."
        );

    }


    textarea.remove();

}


// ============================================================
// MESSAGE
// ============================================================

function showMessage(message) {

    const oldMessage =
        document.querySelector(
            ".converter-message"
        );


    if (oldMessage) {
        oldMessage.remove();
    }


    const messageBox =
        document.createElement("div");


    messageBox.className =
        "converter-message";


    messageBox.textContent =
        message;


    document.body.appendChild(
        messageBox
    );


    setTimeout(() => {

        messageBox.remove();

    }, 2000);

}


// ============================================================
// CLEAR CURRENT CONVERTER
// ============================================================

function clearCurrentConverter() {

    const category =
        conversionCategory
            ? conversionCategory.value
            : "";


    let inputId = "";
    let resultId = "";


    if (category === "temperature") {

        inputId =
            "temperatureInput";

        resultId =
            "temperatureResult";

    }

    else if (category === "area") {

        inputId =
            "areaInput";

        resultId =
            "areaResult";

    }

    else if (category === "volume") {

        inputId =
            "volumeInput";

        resultId =
            "volumeResult";

    }

    else if (category === "weight") {

        inputId =
            "weightInput";

        resultId =
            "weightResult";

    }

    else if (category === "length") {

        inputId =
            "lengthInput";

        resultId =
            "lengthResult";

    }

    else if (category === "time") {

        inputId =
            "timeInput";

        resultId =
            "timeResult";

    }


    if (inputId) {

        const input =
            document.getElementById(
                inputId
            );

        if (input) {
            input.value = "";
        }

    }


    if (resultId) {

        const result =
            document.getElementById(
                resultId
            );

        if (result) {

            result.textContent =
                "Result:";

        }

    }

}


// ============================================================
// CLEAR EVERYTHING
// ============================================================

function clearAll() {

    document
        .querySelectorAll(
            ".conversion input"
        )
        .forEach(input => {

            input.value = "";

        });


    document
        .querySelectorAll(
            ".result p"
        )
        .forEach(result => {

            result.textContent =
                "Result:";

        });


    if (conversionCategory) {

        conversionCategory.value =
            "";

    }


    hideAllForms();


    showMessage(
        "🧹 Converter cleared!"
    );

}


// ============================================================
// HISTORY VIEW
// ============================================================

function showHistory() {

    const history =
        JSON.parse(
            localStorage.getItem(
                "quickConverterHistory"
            ) || "[]"
        );


    if (history.length === 0) {

        alert(
            "🕘 No conversion history found."
        );

        return;

    }


    let message =
        "🕘 CONVERSION HISTORY\n\n";


    history
        .slice(0, 10)
        .forEach((item, index) => {

            message +=
                `${index + 1}. ` +
                `${item.input} ` +
                `${item.from} = ` +
                `${item.result} ` +
                `${item.to}\n` +
                `${item.date}\n\n`;

        });


    alert(message);

}


// ============================================================
// CLEAR HISTORY
// ============================================================

function clearHistory() {

    localStorage.removeItem(
        "quickConverterHistory"
    );


    showMessage(
        "🗑️ History cleared!"
    );

}


// ============================================================
// FAVORITES
// ============================================================

function addFavorite() {

    if (!conversionCategory) return;


    const category =
        conversionCategory.value;


    if (!category) {

        alert(
            "Please select a category first."
        );

        return;

    }


    let favorites =
        JSON.parse(
            localStorage.getItem(
                "quickConverterFavorites"
            ) || "[]"
        );


    if (favorites.includes(category)) {

        alert(
            "⭐ This category is already in favorites."
        );

        return;

    }


    favorites.push(category);


    localStorage.setItem(
        "quickConverterFavorites",
        JSON.stringify(favorites)
    );


    showMessage(
        `⭐ ${getUnitName(category)} added to favorites!`
    );

}


// ============================================================
// SHOW FAVORITES
// ============================================================

function showFavorites() {

    const favorites =
        JSON.parse(
            localStorage.getItem(
                "quickConverterFavorites"
            ) || "[]"
        );


    if (favorites.length === 0) {

        alert(
            "⭐ No favorite categories yet."
        );

        return;

    }


    alert(
        "⭐ FAVORITE CATEGORIES\n\n" +
        favorites
            .map(
                item =>
                    "• " +
                    item.charAt(0).toUpperCase() +
                    item.slice(1)
            )
            .join("\n")
    );

}


// ============================================================
// REMOVE FAVORITES
// ============================================================

function clearFavorites() {

    localStorage.removeItem(
        "quickConverterFavorites"
    );


    showMessage(
        "⭐ Favorites cleared!"
    );

}


// ============================================================
// SEARCH
// ============================================================

const conversionSearch =
    document.getElementById(
        "conversionSearch"
    );


const searchResults =
    document.getElementById(
        "searchResults"
    );


const searchableConversions = [

    {
        name: "Centimeter to Inches",
        keywords:
            "cm centimeter centimeters inch inches",
        url:
            "Centemeter_to_Inches.html"
    },

    {
        name: "Kilogram to Pounds",
        keywords:
            "kg kilogram kilograms pound pounds lbs",
        url:
            "KG_to_LBS_Converter.html"
    },

    {
        name: "Celsius to Fahrenheit",
        keywords:
            "celsius fahrenheit temperature",
        url:
            "Celsius_to_Fahrenheit.html"
    },

    {
        name: "Millimeter to Inches",
        keywords:
            "mm millimeter millimeters inch inches",
        url:
            "mm_to_inches.html"
    },

    {
        name: "Meters to Feet",
        keywords:
            "meter meters foot feet",
        url:
            "meters_to_feet.html"
    },

    {
        name: "Kilometers to Miles",
        keywords:
            "km kilometer kilometers mile miles",
        url:
            "km_to_miles.html"
    },

    {
        name: "Centimeters to Feet",
        keywords:
            "cm centimeter feet foot",
        url:
            "cm_to_feet.html"
    },

    {
        name: "Grams to Ounces",
        keywords:
            "gram grams ounce ounces",
        url:
            "grams_to_ounces.html"
    },

    {
        name: "Inches to Feet",
        keywords:
            "inch inches foot feet",
        url:
            "inches_to_feet.html"
    },

    {
        name: "Liters to Gallons",
        keywords:
            "liter liters gallon gallons",
        url:
            "liters_to_gallons.html"
    },

    {
        name: "Pounds to Ounces",
        keywords:
            "pound pounds ounce ounces",
        url:
            "pounds_to_ounces.html"
    },

    {
        name: "MPH to KPH",
        keywords:
            "mph kph speed kilometers miles",
        url:
            "mph_to_kph.html"
    },

    {
        name: "Acres to Square Feet",
        keywords:
            "acre acres square feet",
        url:
            "acres_to_sqfeet.html"
    },

    {
        name: "Meters to Yards",
        keywords:
            "meter meters yard yards",
        url:
            "meters_to_yards.html"
    },

    {
        name: "mL to Cups",
        keywords:
            "ml milliliter cup cups",
        url:
            "ml_to_cups.html"
    }

];


if (conversionSearch && searchResults) {

    conversionSearch.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .toLowerCase()
                    .trim();


            searchResults.innerHTML =
                "";


            if (!query) {

                return;

            }


            const results =
                searchableConversions.filter(
                    item => {

                        return (

                            item.name
                                .toLowerCase()
                                .includes(query)

                            ||

                            item.keywords
                                .toLowerCase()
                                .includes(query)

                        );

                    }
                );


            if (results.length === 0) {

                searchResults.innerHTML =
                    "<p>No conversion found.</p>";

                return;

            }


            results.forEach(item => {

                const div =
                    document.createElement(
                        "div"
                    );


                div.className =
                    "search-result-item";


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    item.url;


                link.textContent =
                    item.name;


                div.appendChild(
                    link
                );


                searchResults.appendChild(
                    div
                );

            });

        }
    );

}


// ============================================================
// SELECT CATEGORY WITH SEARCH
// ============================================================

function openCategory(category) {

    if (!conversionCategory) return;


    conversionCategory.value =
        category;


    conversionCategory.dispatchEvent(
        new Event("change")
    );

}


// ============================================================
// INITIALIZE
// ============================================================

document
    .querySelectorAll(
        ".conversion"
    )
    .forEach(form => {

        form.style.display =
            "none";

    });

