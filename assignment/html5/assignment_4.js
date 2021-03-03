var i = 0;
function countNumbers() {
    if(i < 200) {
        i = i + 10;
        postMessage(i);
    }
    setTimeout("countNumbers()", 300);
}
countNumbers();