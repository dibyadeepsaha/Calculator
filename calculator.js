/* MIT License - Copyright (c) 2020 - Dibyadeep Saha */
function calculate() {
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);

    if (document.getElementById('r1').checked) {
        document.getElementById("num").innerHTML = first + " + " + second + " = " + parseInt(first + second)
    }

    else if (document.getElementById('r2').checked) {
        document.getElementById("num").innerHTML = first + " - " + second + " = " + parseInt(first - second)
    }

    else if (document.getElementById('r3').checked) {
        document.getElementById("num").innerHTML = first + " x " + second + " = " + parseInt(first * second)
    }

    else if (document.getElementById('r4').checked) {

        if (second == 0) {window.alert("Warning: Denominator != 0")}

        else { 
            document.getElementById("num").innerHTML = first + " / " + second + " = " + (first / second)
        }      
    }
}
