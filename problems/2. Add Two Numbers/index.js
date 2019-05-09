/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let flag = 0;
    let head = new ListNode(0), cur = head;
    while (l1 || l2) {
        let val1 = 0;
        let val2 = 0;
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        }
        let sum = val1 + val2 + flag;
        flag = parseInt(sum / 10);
        cur.next = new ListNode(sum % 10);//new next就可以不用两个指针
        cur = cur.next;
    }
    if (flag) {
        cur.next = new ListNode(flag);
    }
    return head.next;
};