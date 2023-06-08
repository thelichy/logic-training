/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = (nums, target) => {
    for (let i = 0, max = nums.length; i < max; i++) {
        for (let j = i + 1; j < max; j++) {
            if (nums[i] + nums[j] == target) {
                return new Array(i, j);
            }
        }
    }

    return new Array(-1, -1);

};


twoSum = (nums, target) => { // ! SLOWER
    for (let i = 0, max = nums.length; i < max; i++) {
        let f = nums.findIndex(n => n == target - nums[i]);
        if (i == f) continue;

        if (nums[i] + nums[f] == target) {
            return new Array(i, f);
        }
    }

    return new Array(-1, -1);
};
