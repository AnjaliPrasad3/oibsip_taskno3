function convertTemperature() {
    var inputTemp=parseFloat(document.getElementById("inputTemp").value);
    var inputUnit=document.getElementById("inputUnit").value;
    var outputUnit=document.getElementById("outputUnit").value;
    var result=document.getElementById("Result");

    if(isNaN(inputTemp)) {
        result.innerText="Please enter a valid temperature :";
        return;
    }
    
    var con;
    var ans;
    var unit;

    if(inputUnit == "Celsius") {
        con=inputTemp+273.15;
    }
    else if(inputUnit == "Farenheit") {
        con=((inputTemp-32)*5/9)+273.15;
    }
    else if(inputUnit == "Kelvin") {
        con=inputTemp;
    }

    if(outputUnit == "Celsius") {
        ans=con-273.15;           
        unit=" °C";
    }
    else if(outputUnit == "Farenheit") {
        ans=((con-273.15)*9/5)+32;
        unit=" °F";
    }
    else if(outputUnit == "Kelvin") {
        ans=con;
        unit=" °K";
    }

    result.innerText="Converted Temperature : "+ans.toFixed(3)+unit;
}