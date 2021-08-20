// update cost
function updateCost(option, price){
    const preCost = document.getElementById(option+'-cost');
    const preCostNumber = parseInt(preCost.innerText);

    preCost.innerText = price;

    calculateTotalPrice(option, preCostNumber);
}

// calculate total price
function calculateTotalPrice(option, prePrice){
    const preTotal = document.getElementById('total-cost');
    const preTotalNumber = parseInt(preTotal.innerText);

    const currentCost = document.getElementById(option + '-cost');
    const currentCostNumber = parseInt(currentCost.innerText);

    let currentTotal = 0;

    console.log(prePrice, parseInt(currentCost.innerText));

    if (prePrice < currentCostNumber){
        currentTotal = preTotalNumber + (currentCostNumber - prePrice);
    }
    else if (prePrice > currentCostNumber){
        currentTotal = preTotalNumber - (prePrice - currentCostNumber);
    }
    else{
        currentTotal = preTotalNumber;
    }
    
    preTotal.innerText = currentTotal;

    //update final TOTAL
    document.getElementById('final-price').innerText = currentTotal;
}

// calculate final price after promo
function applyPromo(code){
    const totalCost = document.getElementById('total-cost');
    const totalCostNumber = parseFloat(totalCost.innerText);

    const finalPrice = document.getElementById('final-price');
    const finalPriceNumber = parseFloat(finalPrice.innerText);
    

    const promoInput = document.getElementById('promo-input');
    
    const afterApplyCode = finalPriceNumber - (finalPriceNumber * 0.2)

    if (code == promoInput.value && finalPriceNumber == totalCostNumber){
        finalPrice.innerText = afterApplyCode;
    }
    promoInput.value = '';
}

// All Event

// memory
document.getElementById('memory-8gb').addEventListener('click', function(){

    updateCost('memory', 0);
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    
    updateCost('memory', 180);
})

// storage
document.getElementById('storage-256gb').addEventListener('click', function(){
    
    updateCost('storage', 0);
})
document.getElementById('storage-512gb').addEventListener('click', function(){
    
    updateCost('storage', 100);
})
document.getElementById('storage-1tb').addEventListener('click', function(){
    
    updateCost('storage', 180);
})

// delivery
document.getElementById('delivery-prime').addEventListener('click', function () {
    
    updateCost('delivery', 0);
})
document.getElementById('delivery-emergency').addEventListener('click', function () {
    
    updateCost('delivery', 20);
})

//promo
document.getElementById('promo-btn').addEventListener('click', function(){
    applyPromo('stevekaku');
})