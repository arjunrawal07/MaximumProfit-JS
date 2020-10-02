//let input = [45, 24, 35, 31, 40, 38, 11] ;

class MaximumProfit {
  find(input) {
    let maxProfit = 0;
    //Start min at first price value to start comparisons
    let min = input[0];
    for (let i = 1; i < input.length; i++) {
      min = Math.min(input[i], min);
      //Calculate the max value between maxProfit and current delta between prices
      maxProfit = Math.max(maxProfit, input[i] - min);
    }
    return maxProfit;
  }
}

module.exports = MaximumProfit;
