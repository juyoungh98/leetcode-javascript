/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution 1
const twoSum = function (nums, target) {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), i];
		} else {
			map.set(nums[i], i);
		}
	}
	return [];
};
output: [0, 1];

// Solution 2
// const twoSum = function (nums, target) {
// 	let hash = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		const n = nums[i];
// 		if (hash[target - n] !== undefined) {
// 			return [hash[target - n], i];
// 		}
// 		hash[n] = i;
// 	}
// 	return [];
// };
// output: [0, 1]

// Solution 3
// const twoSum = function (nums, target) {
// 	let map = new Map();

// 	for (let i = 0; i < nums.length; i++) {
// 		let diff = target - nums[i];

// 		if (map.has(diff)) {
// 			return [i, map.get(diff)];
// 		}

// 		map[nums[i]] = i;
// 	}
// };
// ouput: [1, 0]
