var count =0;
function countTriples(str){

    for (i=0;i<str.length-2;i++){
        if (str.charAt(i) == str.charAt(i+1) && str.charAt(i) == str.charAt(i+2)){
            count++;
        }
    }
    document.write("Count: "+count);
}