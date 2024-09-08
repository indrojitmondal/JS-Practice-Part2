// Your task is to calculate the total budget required to buy electronics:
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;
let total=0;
function calculateElectronicsBudget(l,t,m)
{
     total=l*laptop + t*tablet + m*mobile;
     return total;
}
const output = calculateElectronicsBudget(3,5,7);
console.log(output);