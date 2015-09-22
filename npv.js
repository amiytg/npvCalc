function NPV(discountRate, cashFlow) {
    var npv = 0;
    console.log("discountRate=" + discountRate)
    console.log("cashFlow length=" + cashFlow.length)
    for (var t = 0; t < cashFlow.length; t++) {
        npv += cashFlow[t].value / Math.pow((1 + discountRate), t);
    }
    console.log(npv)
    return npv;
}


function IRR(cashFlow, guess) {
    guess = guess ? guess : 0.1;
    var npv;
    var cnt = 0;
    do {
        npv = NPV(guess, cashFlow);
        guess += 0.001;

        cnt++;
    }
    while (npv > 0)

    return guess;
}