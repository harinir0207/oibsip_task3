function tempConvert() { 
    document.getElementById("sub").addEventListener("click", displayTemp()); 
 
    function displayTemp() { 
        const inputVal = document.getElementById('val').value; 
        const tempSelected = document.getElementById('op'); 
        const valueVal = op.options[tempSelected.selectedIndex].value; 
        // Fahrenheit to Celsius 
        function fahToCal(fah) { 
            let celsius = ((fah - 32) * 5 / 9).toFixed(1); 
            return celsius; 
        } 
        // Celsius to Fahrenheit 
        function calToFah(cel) { 
            let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1); 
            return fahrenheit; 
        } 
        if (valueVal == 'celsius') { 
            document.getElementById("result").innerHTML = calToFah(inputVal) + "      Fahrenheit"; 
        } 
        else { 
            document.getElementById("result").innerHTML = fahToCal(inputVal) + " Celsius"; 
        } 
    } 
 
}