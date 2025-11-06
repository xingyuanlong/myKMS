## 算法

### 1. 换汽水
三个空汽水瓶可以换一瓶汽水，允许向老板借空汽水瓶（但是必须要归还）。小张手上有 n 个空汽水瓶，她想知道自己最多可以喝到多少瓶汽水。

```js

function maxSodaBottle(n, allowBorrow = false) {
  if (n < 0) return 0;
  let total = 0;
  // 每次用 3 个空瓶换一瓶，喝掉后又得到一个空瓶，循环直到无法再换
  while (n >= 3) {
    const exchange = Math.floor(n / 3); // 本次能换到的瓶数
    total += exchange;                  // 累加喝掉的瓶数
    n = exchange + (n % 3);             // 换后剩余的空瓶 = 新喝完的空瓶 + 不能换的余瓶
  }
  // 如果允许借一瓶且最后剩 2 个空瓶，则可以再借一瓶喝掉（常见题目约定）
  if (allowBorrow && n === 2) {
    total += 1;
  }
  return total;
}

function maxSodaBottlesForLoop(n, allowBorrow = false) {
  if (n < 0) return 0;
  let total = 0;

  // 递归 loop：每次用 a 个空瓶换取 floor(a/3) 瓶，喝完又得到相应空瓶，直到不能再换
  const loop = (a) => {
    // 无法再换时，根据是否允许借一瓶处理剩余为 2 的情况
    if (a < 3) {
      if (allowBorrow && a === 2) total += 1;
      return;
    }
    // 本次可换取的瓶数
    const exchange = Math.floor(a / 3);
    total += exchange;
    // 换完并喝掉后剩余的空瓶 = 新喝完的空瓶 + 不能换的余瓶
    a = exchange + (a % 3);
    loop(a);
  };

  loop(n);
  return total;
}
```


### 2. 排序算法


<Collapse>


排序算法分类: 

| 分类         | 特点               | 示例                 |
| ---------- | ---------------- | ------------------ |
| **比较类排序**  | 通过比较元素大小确定顺序     | 冒泡、选择、插入、归并、快速、堆排序 |
| **非比较类排序** | 不通过比较，而是利用桶或计数思想 | 计数排序、桶排序、基数排序      |

常见排序算法:

- 冒泡排序: 相邻元素两两比较，较大的向后“冒泡”

```

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

```
时间复杂度：O(n²)

空间复杂度：O(1)

稳定：✅

- 选择排序: 每轮选择最小（或最大）值放到前面

```
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

```
时间复杂度：O(n²)

空间复杂度：O(1)

稳定：❌（因为交换可能打乱相等元素顺序）


- 插入排序: 将未排序的元素插入到已排序部分的合适位置

```
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}


```
时间复杂度：O(n²)，但几乎有序时效率极高

空间复杂度：O(1)

稳定：✅

- 快速排序: 分治思想，选一个“基准”pivot，小的放左，大的放右，然后递归。

```
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length >> 1];
  const left = arr.filter(x => x < pivot);
  const mid = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
}

```
平均复杂度：O(n log n)

最坏复杂度：O(n²)（当数组几乎有序时）

稳定：❌

- 归并排序: 分治思想，将数组不断二分排序后再合并

```

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    res.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...res, ...left, ...right];
}


```
时间复杂度：O(n log n)

空间复杂度：O(n)

稳定：✅

- 计数排序: 非比较类排序，统计每个元素出现次数

```
function countingSort(arr, maxValue) {
  const count = new Array(maxValue + 1).fill(0);
  arr.forEach(v => count[v]++);
  const res = [];
  count.forEach((v, i) => { while (v--) res.push(i); });
  return res;
}

```

时间复杂度：O(n + k)

空间复杂度：O(k)

稳定：✅

缺点：仅适合整数或离散值范围小的场景


| 场景          | 推荐算法      | 理由       |
| ----------- | --------- | -------- |
| 少量数据（<1000） | 插入 / 冒泡   | 简单实现     |
| 一般排序（常规数组）  | 快速排序      | 平均性能最好   |
| 大量数据、稳定性要求  | 归并排序      | 稳定且复杂度稳定 |
| 数据范围有限、整数   | 计数 / 基数排序 | 非比较类性能高  |
| 实时排序、流式数据   | 插入排序      | 动态插入效率高  |




</Collapse>


### 3. 洗牌算法

<Collapse>


```
function shuffle(array) {
  let arr = array.slice(); // 拷贝一份，不修改原数组
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 随机索引 [0, i]
    [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换
  }
  return arr;
}

```

</Collapse>


### 4.字符串出现的不重复最长长度

<Collapse>

我们可以用 双指针（left、right）+ 哈希表（Set 或 Map） 实现：

- 用一个窗口 [left, right) 表示当前不重复子串；

- 向右移动 right 扩大窗口；

- 若遇到重复字符，则移动 left 收缩窗口；

- 过程中记录窗口最大长度。

```js
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

```

</Collapse>
