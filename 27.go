package main

import (
	"fmt"
)

func removeElement(nums []int, val int) int {

	newArr := []int{}

	for _, value := range nums {
		if value != val {
			newArr = append(newArr, value)
		}
	}

	number := copy(nums, newArr)
	fmt.Println(nums)
	return number
}
