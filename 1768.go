package main

func mergeAlternately(word1 string, word2 string) string {

	len1 := len(word1)
	len2 := len(word2)
	newword := []byte{}
	needs_looping := false
	looptill := len1

	if len1 < len2 {
		needs_looping = true
		looptill = len1
	} else if len1 > len2 {
		needs_looping = true
		looptill = len2
	}

	for i := range looptill {
		newword = append(newword, word1[i])
		newword = append(newword, word2[i])
	}

	if needs_looping {
		if len1 < len2 {
			for i := len1; i < len2; i++ {
				newword = append(newword, word2[i])
			}
		} else {
			for i := len2; i < len1; i++ {
				newword = append(newword, word1[i])
			}
		}
	}

	return string(newword)

}
