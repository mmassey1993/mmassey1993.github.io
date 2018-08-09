var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

function getData() {
    var requestData = request.response;
    var myTable1 = document.getElementById("squad");
    var row = myTable1.insertRow(1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = requestData["squadName"];
    var cell2 = row.insertCell(1);
    cell2.innerHTML = requestData["homeTown"];
    var cell3 = row.insertCell(2);
    cell3.innerHTML = requestData["formed"];
    var cell4 = row.insertCell(3);
    cell4.innerHTML = requestData["secretBase"];
    var cell5 = row.insertCell(4);
    cell5.innerHTML = requestData["active"];

    var myTable2 = document.getElementById("members");
    for (i = 0; i < 3; i++) {
        var row = myTable2.insertRow(1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = JSON.stringify(requestData["members"][i]["name"]);
        var cell2 = row.insertCell(1);
        cell2.innerHTML = JSON.stringify(requestData["members"][i]["age"]);
        var cell3 = row.insertCell(2);
        cell3.innerHTML = JSON.stringify(requestData["members"][i]["secretIdentity"]);
        var cell4 = row.insertCell(3);
        cell4.innerHTML = JSON.stringify(requestData["members"][i]["powers"].toString());
    }


}