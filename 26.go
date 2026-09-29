package main

func removeDuplicates(nums []int) int {

	new_nums := []int{}
	tempVar := nums[0]
	new_nums = append(new_nums, tempVar)

	for i := 0; i < len(nums); i++ {
		if tempVar == nums[i] {
			continue
		} else {
			tempVar = nums[i]
			new_nums = append(new_nums, nums[i])
		}
	}
	number := copy(nums, new_nums)
	return (number)
}
