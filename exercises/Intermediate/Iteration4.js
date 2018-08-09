var count=0;
function divideBy3(num){

    if (num==1){
        document.write("Num is now 1. Total steps: "+count +"<br>");
    } else if (num%3==0){
        num = num/3;
        document.writeln("Value was divisible by three. Num is now " +num +"<br>");
        count++;
        divideBy3(num);
    } else {
        num++;
        document.writeln("Value was not divisible by three, so 1 is added. Num is now " +num +"<br>");
        count++;
        divideBy3(num);
    }

}