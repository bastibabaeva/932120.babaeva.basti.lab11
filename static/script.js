function getRandom(){
    return Math.floor(Math.random()*10)
}

var firstValue = getRandomValue();
var secondValue = getRandomValue();

function updatesElements(selector, value){
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = value;
}
}

updatesElements("value1", firstValue);
updatesElements("value2", secondValue);

var sumResult=firstValue+secondValue;
var subResult=firstValue-secondValue;
var umnResult=firstValue*secondValue;

document.querySelector(".sumResult").textContent=sumResult;
document.querySelector(".subResult").textContent=subResult;
document.querySelector(".umnResult").textContent=umnResult;

var divResElement = document.querySelector(".div-res");
if(secondValue !==0){
    divResElement.textContent=Math.floor(firstValue/secondValue);
}
else
{
    divResElement.textContent="Division by 0";
}