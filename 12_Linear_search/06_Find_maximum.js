const findMax = (nums) => {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};

console.log(findMax([32, 3, 4, 8, 49, 34, 995, 43, 34, 942, 32]));


//find index of maximum 
const findIndexOfmaximum = (nums) => {
  if (nums.length === 0) return -1;
  let max = nums[0];
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};
console.log(findIndexOfmaximum([32, 4, 34, 995, 234, 23, 9953, 2]));
console.log(findIndexOfmaximum([]));
