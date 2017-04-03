// HackerRank solution for 2D Array - DS
arr = [ [ -1, -1, 0, -9, -2, -2 ],
      [ -2, -1, -6, -8, -2, -5 ],
      [ -1, -1, -1, -2, -3, -4 ],
      [ -1, -9, -2, -4, -4, -5 ],
      [ -7, -3, -3, -2, -9, -9 ],
      [ -1, -3, -1, -2, -4, -5 ] ]
console.log(arr);

function currentSum(arr) {
  let curSum = 0;
  let maxSum = -99999;
  for (let n = 0; n < 4; n++) {
    for (let i = 0; i < 4; i++) {
      middleIndex = i + 1;
      curSum = arr[n][i] + arr[n][i + 1] + arr[n][i + 2];
      curSum = curSum + arr[n + 2][i] + arr[n + 2][i + 1] + arr[n + 2][i + 2] 
      + arr[n + 1][i + 1];
      // console.log("i is: ", i);
      // console.log("arr[1][middleIndex] is: ", arr[1][middleIndex]);
      console.log(curSum);
      if (curSum > maxSum) {
        maxSum = curSum;
      } 
    }
  }

  return maxSum
}

maxSum = currentSum(arr);
console.log("final max is: ", maxSum);