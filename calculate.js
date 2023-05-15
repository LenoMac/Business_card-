let values = document.getElementById("values");
let result = document.getElementById("result");
let buttons = document.querySelectorAll(".btn");


buttons.forEach((el) => {
    el.onclick = function () {
        if (el.id === "clear") {
            values.innerHTML = "";
            result.innerHTML = "0";
        } else if (el.id === "backspace") {
            let string = values.innerHTML.toString();
            values.innerHTML = string.slice(0, -1);
        } else if (el.id != "" && el.id != "=") {
            values.innerHTML += el.id;
        }
        else if (el.id === "=") {
            let equation = eval(values.innerHTML);
            result.innerHTML = equation;
        };
    };
});
