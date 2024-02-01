function addAndSubtract(int1, int2, int3) {
    function sumOfFirstSecond(int1, int2) {
        return int1 + int2;
    }
    let finalResult = sumOfFirstSecond(int1, int2) - int3;


    console.log(finalResult);
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);