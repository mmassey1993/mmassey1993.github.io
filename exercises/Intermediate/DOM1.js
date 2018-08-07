
var para;
var text;

function createPara(){
    para = document.createElement("p");
    console.log(document.body);
}

function editPara(str){
    text = document.createTextNode(str);
    para.appendChild(text);
    document.getElementById("div1").appendChild(para);
}

function removePara(){
    para.removeChild(text);

}