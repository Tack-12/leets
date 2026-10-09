class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        insertAt = len(nums1) - n

        if insertAt < 0:
            return

        ptr1 = 0
        for x in range(insertAt, len(nums1)):
            if nums1[x] == 0:
                nums1[x] = nums2[ptr1]
                ptr1 += 1

        nums1.sort()


solution = Solution()

num1 = [1, 2, 3, 0, 0, 0]
m = 3
num2 = [2, 5, 6]
n = 3

solution.merge(num1, m, num2, n)
print(num1)
