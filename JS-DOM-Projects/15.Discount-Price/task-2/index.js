document.getElementById('apply-button').addEventListener('click', function () {
    // original price section
    const originalPriceElement = document.getElementById('original-price');
    const originalPrice = parseFloat(originalPriceElement.textContent);

    // coupon section 
    const couponElement = document.getElementById('coupon-id');;
    const coupon = couponElement.value;
    couponElement.value = '';

    // please pay section
    const pleasePay = document.getElementById('please-pay');

    if (coupon === 'DISC30') {
    // counting discount
    const percentageOfDiscount = 30;
    const discount = percentageOfDiscount / 100;
    const discountPrice = originalPrice - (originalPrice * discount);
    // showing discount price in (please pay) context
    pleasePay.textContent = discountPrice;
    }
    else {
        alert('Wrong Coupon');
        // showing original price in (please pay) context
        pleasePay.textContent = originalPrice; 
    }
})