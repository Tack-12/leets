package main

import (
	"fmt"
	"strconv"
)

func reverse_int(x int) int {

	x_str := strconv.Itoa(x)
	len_x := len(x_str) - 1
	new_int := []byte{}

	if x_str[0] == '-' {
		new_int = append(new_int, '-')
		for i := len_x; i >= 1; i-- {
			new_int = append(new_int, x_str[i])
		}
	} else {
		for i := len_x; i >= 0; i-- {
			new_int = append(new_int, x_str[i])
		}
	}

	x_str = string(new_int)
	val, err := strconv.Atoi(x_str)
	if err != nil {
		fmt.Println("Error conv to string")
	}
	if val < -2147483648 || val > 2147483647 {
		return 0
	}
	return val
}
