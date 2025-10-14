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