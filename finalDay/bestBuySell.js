var maxProfit = function (prices) {
  let currProfit = 0;
  let buyingPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (buyingPrice >= prices[i]) {
      buyingPrice = prices[i];
    }

    currProfit = Math.max(currProfit, prices[i] - buyingPrice);
  }
  return currProfit;
};

console.log(maxProfit([1, 2]));
