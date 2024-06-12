document.getElementById('apply-button').addEventListener('click', function () {
    const originalPriceElement = document.getElementById('original-price');
    const originalPrice = parseFloat(originalPriceElement.textContent);

    const percentageOfDiscount = 30;
    const discount = percentageOfDiscount / 100;
    const discountPrice = originalPrice - (originalPrice * discount);

    const pleasePay = document.getElementById('please-pay');
    pleasePay.textContent = discountPrice;

})