
function additionFunction() {
    var input_FirstNumber, input_SecondNumber, addedValue;
    input_FirstNumber = parseInt(document.getElementById("firstNum").value);
    input_SecondNumber = parseInt(document.getElementById("secondNum").value);
    addedValue = input_FirstNumber + input_SecondNumber;
    document.getElementById("answer").value = addedValue;

}