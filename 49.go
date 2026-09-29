package main

import (
	"fmt"
	"sort"
)

func strKey(str string) string {

	chars := []rune(str)
	sort.Slice(chars, func(i, j int) bool { return chars[i] < chars[j] })
	return (string(chars))
}

func groupAnagrams(strs []string) [][]string {

	groups := make(map[string][]string)

	for _, value := range strs {
		key := strKey(value)
		fmt.Printf(" %s key is %s \n", value, key)
		groups[key] = append(groups[key], value)
	}

	result := make([][]string, 0, len(groups))
	for _, val := range groups {
		result = append(result, val)
	}

	return (result)
}

