class Solution:
    def validPalindrome(self, s: str) -> bool:
        s_list = list(s)
        s_list = [i.lower() for i in s_list if i.isalnum()]
        ptr2 = len(s_list) - 1

        for ptr1 in range(len(s_list)):
            if s_list[ptr1] != s_list[ptr2]:
                return False
            ptr2 -= 1

        return True


checkSol = Solution()

s = "A man, a plan, a canal: Panama"

print(checkSol.validPalindrome(s))
