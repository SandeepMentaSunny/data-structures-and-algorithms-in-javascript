//Say you have an array for which the ith element is the price of the given stock day i
//Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e, buy one and sell one share of the stock multiple times)

//Note: You must engage in multiple transactions at the same time (i.e, you must sell the stock if you buy again)

function maxProfit(prices){
    let diff = 0;
    for(let i=1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            diff += prices[i] - prices[i-1];
        }
    }
    return diff;
}

//Time Complexity => O(N)
//Space Complexity => O(1)