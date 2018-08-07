function submitData(name, age, occupation){
    var obj={};

    obj.personName = name;
    obj.personAge = age;
    obj.personOcc = occupation;
    window.alert("You submitted the following data - Name: "+obj.personName+" Age: "+obj.personAge+" Occupation: "+obj.personOcc);
    console.log(obj.personName, obj.personAge, obj.personOcc);
    if (obj.personAge >= 20 && obj.personAge<= 40){
        console.log(true);
    } else {
        console.log(false);
    }
}