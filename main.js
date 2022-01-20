const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")

const inputs = document.getElementsByClassName("input")

function converterTemperature() {
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
    
        input.addEventListener("input", (e) => {
            let value = parseFloat(e.target.value).toFixed(2);
    
            switch (e.target.name) {
                case "celcius":
                    kelvinInput.value = value + 273.15;
                    fahrenheitInput.value = (value * 1.8) + 32;
                    break;
                case "fahrenheit":
                    kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                    celciusInput.value = (value - 32) / 1.8;
                    break;
                case "kelvin":
                    celciusInput.value = value - 273.15;
                    fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                    break;
                default:
                    break;
            }
        })
    }
}

converterTemperature();