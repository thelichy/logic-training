/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = 0, max = nums.length; i < max; i++) {
        for (let j = i + 1; j < max; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }

    return false;
};


// * SOLUTION:
// "Set objects are collections of values. A value in the set may only occur once;
// it is unique in the set's collection."
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

containsDuplicate = nums => {
    const n = new Set(nums);
    return nums.length == n;
}
