
function checkOddEven(num)
{
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}
const checkOddEvenArrow = (num) => {
    console.log(num + (num % 2 === 0 ? " is even" : " is odd"));
};
// Example usage
checkOddEvenArrow(7); // Output: 7 is odd
checkOddEvenArrow(12); // Output: 12 is even