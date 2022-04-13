function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}