'use strict'
var table = document.getElementById('myTable');
var rowCount;
var rowCount2;

function checkIn(id, brand, model, age) {
    var carData = [id, brand, model, age];
    rowCount  = table.getElementsByTagName("tr").length;
    var row = table.insertRow(rowCount);
    for (var i = 0; i < 4; i++) {
        var cell = row.insertCell(i);
        cell.innerText = carData[i];
    }
}

function checkOut(id) {
    rowCount2 = table.getElementsByTagName("tr");
    for (var i=0;i<rowCount.length;i++){
        var td = rowCount[i].getElementsByTagName("td")[0];
        if (id == td){
            table.removeChild(td);
        }
    }
}

function calculateBill(id) {

}

function getAllVehicles() {
    if (table.style.display === "none") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
}