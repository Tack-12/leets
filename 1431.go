package main

import "fmt"

func kidsWithCandies(candies []int, extraCandies int) []bool {

	highestVal := candies[0]
	newArr := []bool{}

	for i, val := range candies {

		if candies[i] > highestVal {
			highestVal = candies[i]
		}

		candies[i] = val + extraCandies
	}

	for i := range candies {
		if candies[i] >= highestVal {
			newArr = append(newArr, true)
		} else {
			newArr = append(newArr, false)
		}
	}

	return newArr

}

func main() {
	candies := []int{2, 3, 5, 1, 3}
	extraCandies := 3

	newArr := kidsWithCandies(candies, extraCandies)

	fmt.Println(newArr)

}
