var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr != null) {
    let nextHead = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextHead;
  }

  return prev;
};
