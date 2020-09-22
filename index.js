var counter = 0

function findNumber() {
    let number = 66;
    let guess = document.getElementById("input").value

    if (isNaN(guess)) {
        document.getElementById("result").innerHTML = "Please enter only Numbers"
    }
    else if (guess < number) {
        document.getElementById("result").innerHTML = "I am thinking about higher number"
    } else if (guess > number) {
        document.getElementById("result").innerHTML = "I am thinking about lower number"
    } else {
        document.getElementById("result").innerHTML = "CONGRATULATIONS !!!"
    }


}

function testNumber() {
counter++;
    document.getElementById("test-number").innerHTML = "This is your test number " + counter


}