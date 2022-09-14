function while1() {
    let num = parseInt(prompt("Enter a number"));
    let sum = 0;
    while (num !== -1) {
        alert(num);
        sum += num;
        num = parseInt(prompt("Enter a number"));
    }
    alert('Total all of number is: ' + sum)
}

function while2() {
    let num;
    let sum = 0;
    while (num !== -1) {
        num = parseInt(prompt("Enter a number"));
        alert(num);
        sum += num;
    }
    alert('Total all of number is: ' + sum)
}

function while3(){
    let i = 1;
    while (i < 100){
        document.write('<hr style="width: ' + i + '%">');
        i++;
    }
}

