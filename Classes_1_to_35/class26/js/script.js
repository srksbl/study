// Assigment operator
let assign; // Declare variable
assign = 100; // Value assign (=) Assigmnet operator
document.getElementById('assignment').innerHTML = '<i>' + assign + '</i>';

// Addition operaotr
let x = 10;
let y = 50;
document.getElementById('addition').innerHTML = x + y;


// Document Write
// document.write("Hello Shahrukh");

// increment operator
let inc = 1;
document.getElementById('increment').innerHTML = inc;

document.getElementById('btnInc').addEventListener('click', function(e) {
    inc++;
    document.getElementById('increment').innerHTML = inc;
});

document.getElementById('btnDc').addEventListener('click', function(e) {
    inc--;
    document.getElementById('increment').innerHTML = inc;
});
