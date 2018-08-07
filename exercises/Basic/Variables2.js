var person = {name:"Michael", age:24, occupation:"Trainee Consultant"};
console.log("Before Change", JSON.parse(JSON.stringify(person)));

function editPerson(p1){
    p1.name = "Bill";
    p1.age = 40;
    p1.occupation = "Painter";
}
editPerson(person);
console.log("After Change", person);

