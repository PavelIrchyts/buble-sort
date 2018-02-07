var testArr = [5, 8, 0, 3, 9];
for (var x = 0; x < testArr.length; x++) {
    for (var i = 0; i < testArr.length; i++) {
        if (testArr[i] > testArr[i + 1]) {
            var a = testArr[i];
            var b = testArr[i + 1];
            testArr[i + 1] = a;
            testArr[i] = b;
        }
    }
}
document.write(testArr);