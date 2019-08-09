function incrm() {
    var number1, number2, result, answer;
    
    number1 = parseInt(document.getElementById('inp1').value);
    number2 = parseInt(document.getElementById('inp2').value);
    
    result = number1 + number2;
    answer = 'Результат: ' + result;
    
    document.getElementById('out').innerHTML = answer;
}


function decrem() {
    var number1, number2, result, answer;
    
    number1 = parseInt(document.getElementById('inp1').value);
    number2 = parseInt(document.getElementById('inp2').value);
    
    result = number1 - number2;
    answer = 'Результат: ' + result;
    
    document.getElementById('out').innerHTML = answer;
}


function myltiply() {
    var number1, number2, result, answer;
    
    number1 = parseInt(document.getElementById('inp1').value);
    number2 = parseInt(document.getElementById('inp2').value);
    
    result = number1 * number2;
    answer = 'Результат: ' + result;
    
    document.getElementById('out').innerHTML = answer;
}


function share() {
    var number1, number2, result, answer;
    
    number1 = parseInt(document.getElementById('inp1').value);
    number2 = parseInt(document.getElementById('inp2').value);
    
    result = number1 / number2;
    answer = 'Результат: ' + result;
    
    document.getElementById('out').innerHTML = answer;
}