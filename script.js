function calculate() {
    let inputTotalBill = document.getElementById('totalbill');
    let inputTip = document.getElementById('tipPer');
    let inputNo = document.querySelector("#noPer");
    
    let outputBillAmount = document.querySelector(".p1");
    let outputTipAmount = document.querySelector('.p2');
    let outputTotalBill = document.querySelector('.p3');
    let outputEachPerson = document.querySelector('.p4');

    inputTotalBill = Number(inputTotalBill.value);
    inputTip = Number(inputTip.value);
    inputNo = Number(inputNo.value);

    outputBillAmount.innerHTML = "$ " + inputTotalBill.toFixed(2);
    let calculation = inputTotalBill * (inputTip / 100);
    outputTipAmount.innerHTML = "$ " + calculation.toFixed(2)
    let totalBill = inputTotalBill + calculation
    outputTotalBill.innerHTML = "$ " + totalBill.toFixed(2)
    let each = totalBill / inputNo
    outputEachPerson.innerHTML = "$ " + each.toFixed(2)
}


let btn = document.getElementById("btn")
btn.addEventListener('click', () => {
    calculate()
})
