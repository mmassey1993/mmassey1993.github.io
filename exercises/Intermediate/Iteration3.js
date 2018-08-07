



function fizzBuzz(count, fizz, buzz) {
    for (i = 1; i <= count; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(fizz + " " + buzz + "<br>");
            document.writeln(fizz + " " + buzz + "<br>");
        } else if (i % 5 == 0) {
            console.log(buzz + "<br>");
            document.writeln(buzz + "<br>");
        } else if (i % 3 == 0) {
            console.log(fizz + "<br>");
            document.write(fizz + "<br>");
        } else {
            console.log(i + "<br>");
            document.writeln(i + "<br>");
        }
    }
}