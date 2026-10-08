var mergeList = function (list1, list2) {
  let newlist = new Listnode();

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      newlist.next = list1;
      list1 = list1.next;
    } else {
      newlist.next = list2;
      list2 = list2.next;
    }
  }
  if (list1 != null) {
    newlist.next = list1;
  }
  if (list2 != null) {
    newlist.next = list2;
  }

  return newlist;
};
