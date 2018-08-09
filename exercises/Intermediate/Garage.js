'use strict';
let table = document.getElementById('myTable');
let rowCount;
let price;
let id = 0;
let col1, col2, col3, col4, col5;
let carBrands = ["ford", "toyota", "renault", "alfa romeo", "ferrari", "jaguar"];

function checkIn(id) {
    let carData = cars[id-1];
    rowCount = table.getElementsByTagName("tr").length;
    let row = table.insertRow(rowCount);
    for (let i = 0; i < 5; i++) {
        let cell = row.insertCell(i);
        if (i == 4) {
            cell.innerText = Boolean(false).toString();
        } else cell.innerText = carData[i];
    }
}

function checkOut(id) {
    rowCount = table.getElementsByTagName("tr");
    for (let i = 1; i < rowCount.length; i++) {
        col1 = rowCount[i].getElementsByTagName("td")[0].innerHTML;
        col5 = rowCount[i].getElementsByTagName("td")[4].innerHTML;
        if (col5 == "true") {
            if (id == col1) {
                table.deleteRow(i);
                return;
            }
        } else continue;
    }
}

function calculateBill(id) {
    price = 0;
    rowCount = table.getElementsByTagName("tr");

    for (let i = 1; i < rowCount.length; i++) {
        col1 = rowCount[i].getElementsByTagName("td")[0].innerHTML;
        col2 = rowCount[i].getElementsByTagName("td")[1].innerHTML;
        col3 = rowCount[i].getElementsByTagName("td")[2].innerHTML;
        col4 = rowCount[i].getElementsByTagName("td")[3].innerHTML;

        if (id == col1) {
            if (col4 > 15) {
                price += 200;
            } else if (col4 > 10) {
                price += 150;
            } else if (col4 > 5) {
                price += 100;
            } else price += 50;
        }
        if (id == col1) {
            if (col2.toUpperCase() == carBrands[5].toUpperCase() || col2.toUpperCase() == carBrands[4].toUpperCase()) {
                price += 200;
            } else if (col2.toUpperCase() == carBrands[3].toUpperCase() || col2.toUpperCase() == carBrands[2].toUpperCase()) {
                price += 150;
            } else if (col2.toUpperCase() == carBrands[1].toUpperCase() || col2.toUpperCase() == carBrands[0].toUpperCase()) {
                price += 100;
            } else price += 50;
        }
        if (id == col1) {
            rowCount[i].deleteCell(4);
            let cell = rowCount[i].insertCell(4);
            cell.innerText = Boolean(true).toString();
            col5 = rowCount[i].getElementsByTagName("td")[4].innerHTML;
        }
        if (id == col1){
            if (cars[id-1][4] > 0.7) {
                price *= 3;
            } else if (cars[id-1][4] > 0.4){
                price *= 2;
            }
        }
    }
    window.alert(`Your bill is ${price}, click OK to pay your bill`);
}

function getAllVehicles() {
    if (table.style.display === "none") {
        table.style = "width:500px;\n" +
            "    border: 1px solid black;\n" +
            "    text-align: center;\n" +
            "    vertical-align: middle;\n" +
            "    grid-template-columns: repeat(auto-fit, 100px);\n" +
            "    margin-left: auto;\n" +
            "    margin-right: auto;\n" +
            "    table-layout: fixed;";
    } else {
        table.style.display = "none";
    }
}