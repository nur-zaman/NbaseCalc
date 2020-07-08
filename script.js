function main() {
    var con = true
    document.getElementById("er").innerHTML = " "
    document.getElementById("res").innerHTML = " "
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var b = parseInt(document.getElementById("base").value);
    base = (b <= 32 && b > 0) ? b : printError();
    var add = document.getElementById("add").checked
    var min = document.getElementById("min").checked
    var mul = document.getElementById("mul").checked
    var num1 = parseInt(x, base);
    var num2 = parseInt(y, base);

    var result = '';

    if (add && con) {

        result = (num1 + num2)
    }
    else if (mul && con) {
        result = (num1 * num2)
    }
    else if (min && con) {
        result = (num1 - num2)
    }

    var res = result.toString(base);

    document.getElementById("res").innerHTML = res;


}
function convert(num) {

}
function printError() {
    document.getElementById("er").innerHTML = "ERROR";
    con = false;
}

