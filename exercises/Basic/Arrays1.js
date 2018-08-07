var myList = ['Mcdonalds', 'KFC', 'Chicken Cottage'];
document.write("Initial array:" +"<br>");
printArray();

document.write("<br>"+"Added one to array:" + "<br>");
myList[myList.length] = 'Dominoes';
printArray();

document.write("<br>"+"Removed one from array:"  + "<br>");
myList.splice(3,1);
printArray();

function printArray(){
    for (i=0; i<myList.length; i++){
        document.write(myList[i]);
        document.write("<br>");
    }
}