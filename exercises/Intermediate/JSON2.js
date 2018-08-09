var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
    var requestData = request.response;

    var myTable = document.getElementById("table");
    for (i = 0; i < requestData.length; i++) {
        var row = myTable.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = requestData[i]["nm"];
        var cell2 = row.insertCell(1);
        cell2.innerHTML = requestData[i]["cty"];
        var cell3 = row.insertCell(2);
        cell3.innerHTML = requestData[i]["hse"];
        var cell4 = row.insertCell(3);
        cell4.innerHTML = requestData[i]["yrs"];
    }

}

function filterMonarchs() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("table");
    var tr = table.getElementsByTagName("tr");
    var td0, td1, td2, td3;
    for (i = 0; i < tr.length; i++) {
        td0 = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3];
        if (td0 || td1 || td2 || td3) {
            if (td0.innerHTML.toUpperCase().indexOf(filter) > -1 || td1.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1 || td3.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}