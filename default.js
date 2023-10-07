// Created on iPad.

var testBtn = document.getElementById('testButton')
var pageHeading = document.body.children[0]
function changeText() {
    pageHeading.textContent = 'changed!'
}
testBtn.addEventListener('click', changeText)