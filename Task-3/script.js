let temperatureType = document.getElementById('temperatureType');
let temperatureValue = document.getElementById('temperatureValue');
let result = document.getElementById('result');

temperatureValue.oninput = () => {
    let inputValue = parseFloat(temperatureValue.value);
    let selectedType = temperatureType.value;
    let convertedValue = 0;

    if (selectedType === 'celsius') {
        convertedValue = (inputValue * 9) / 5 + 32;
    } else if (selectedType === 'fahrenheit') {
        convertedValue = ((inputValue - 32) * 5) / 9;
    }

    result.value = parseFloat(convertedValue.toFixed(2));
};
