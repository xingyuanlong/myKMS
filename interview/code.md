### 现场手写代码

### 1. 数组转树


<Collapse>

```js
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 }
];

function buildTree(data) {
  const map = new Map();
  const roots = [];

  // 初始化 map
  data.forEach(item => {
    map.set(item.id, { ...item, children: [] });
  });

  data.forEach(item => {
    const node = map.get(item.id);
    if (item.parentId && map.has(item.parentId)) {
      // 父节点存在，挂载到父节点的 children
      map.get(item.parentId).children.push(node);
    } else {
      // 没有 parentId 或者父节点不存在，都当作根节点
      roots.push(node);
    }
  });

  return roots;
}

const tree = buildTree(arr);
console.log(JSON.stringify(tree, null, 2));

```

</Collapse>

### 2. 链式调用的任务调度器

```
// [ > … ] 表示调用函数后的打印内容 
// arrange('William').execute(); 
// > William is notified 
// arrange('William').do('commit').execute(); 
// > William is notified 
// > Start to commit 
// arrange('William').wait(5).do('commit').execute(); 
// > William is notified 
// 等待 5 秒 
// > Start to commit 
// arrange('William').waitFirst(5).do('push').execute(); 
// 等待 5 秒 
// > William is notified 
// > Start to push
```

<Collapse>

```js
function arrange(name) {
  const queue = []

  const obj = {
    do(task) {
      queue.push({ first: false, fn: () => console.log(`Start to ${task}`) })
      return obj
    },
    wait(sec) {
      queue.push({ first: false, fn: () => new Promise(r => {
        console.log(`等待 ${sec} 秒`)
        setTimeout(r, sec * 1000)
      })})
      return obj
    },
    waitFirst(sec) {
      queue.push({ first: true, fn: () => new Promise(r => {
        console.log(`等待 ${sec} 秒`)
        setTimeout(r, sec * 1000)
      })})
      return obj
    },
    async execute() {
      // 先执行所有 waitFirst
      for (const t of queue.filter(t => t.first)) await t.fn()
      // 打印通知
      console.log(`${name} is notified`)
      // 执行剩下的普通任务
      for (const t of queue.filter(t => !t.first)) {
        const res = t.fn()
        if (res instanceof Promise) await res
      }
    }
  }

  return obj
}
```

</Collapse>

### 3. 从0到1新建一个React前端工程，并写一个页面，实现下面功能：上面有个2分钟的倒计时,倒计时下，有2个按钮，一个按钮可以暂停/恢复倒计时，另一个按钮可以减10秒倒计时,然后倒计时到0之后，出现一个秒杀新按钮. 进阶增加重新开始功能

答案:
react:

<Collapse>

```jsx
// 代码由github copilot 生成

import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL = 120;

const Demo = () => {
  const [time, setTime] = useState(INITIAL);
  const [isStop, setStop] = useState(false);
  const t = useRef(null);

  // 提取清理函数，统一调用
  const clearTimer = useCallback(() => {
    if (t.current) {
      clearInterval(t.current);
      t.current = null;
    }
  }, []);

  useEffect(() => {
    // 如果暂停，清理定时器并返回
    if (isStop) {
      clearTimer();
      return;
    }

    // 已有定时器则不重复创建
    if (t.current) return;

    t.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          // 到 0 时清理定时器并返回 0
          clearTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 卸载时清理
    return () => {
      clearTimer();
    };
  }, [isStop, clearTimer]);

  // 卸载时再确保清理（保险）
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  const stopAc = useCallback(() => {
    setStop((v) => !v);
  }, []);

  const down = useCallback(() => {
    setTime((t) => (t - 10 > 0 ? t - 10 : 0));
  }, []);

  // 重新开始：清理旧定时器、重置时间并立即启动新定时器
  const restart = useCallback(() => {
    clearTimer();
    setTime(INITIAL);
    setStop(false);

    // 立即启动新的定时器（与 useEffect 中逻辑一致）
    if (!t.current) {
      t.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [clearTimer]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <>
      <div aria-live="polite" style={{ fontSize: 32, marginBottom: 12 }}>
        {formatTime(time)}
      </div>
      <button onClick={stopAc} aria-pressed={isStop}>
        {isStop ? "恢复" : "暂停"}
      </button>
      <button onClick={down} disabled={time === 0} aria-disabled={time === 0}>
        减10秒倒计时
      </button>
      <button onClick={restart} style={{ marginLeft: 8 }}>
        重新开始
      </button>
      {time === 0 ? <button aria-label="秒杀按钮">秒杀</button> : null}
    </>
  );
};

export default Demo;

```

</Collapse>

vue3:
代码由github copilot 生成

<Collapse>

```vue

<template>
  <div>
    <div aria-live="polite" style="font-size:32px; margin-bottom:12px;">
      {{ formatTime(time) }}
    </div>

    <button @click="toggleStop" :aria-pressed="isStop">
      {{ isStop ? "恢复" : "暂停" }}
    </button>

    <button @click="decrease10" :disabled="time === 0" :aria-disabled="time === 0">
      减10秒倒计时
    </button>

    <button @click="restart" style="margin-left:8px;">
      重新开始
    </button>

    <button v-if="time === 0" aria-label="秒杀按钮">秒杀</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const INITIAL = 120;

const time = ref(INITIAL);
const isStop = ref(false);
const timerId = ref(null);

function clearTimer() {
  if (timerId.value !== null) {
    clearInterval(timerId.value);
    timerId.value = null;
  }
}

function startTimer() {
  // 如果已经有定时器或已停止或已到 0，则不启动
  if (timerId.value || isStop.value || time.value === 0) return;

  timerId.value = setInterval(() => {
    time.value = Math.max(0, time.value - 1);
    if (time.value === 0) {
      clearTimer();
    }
  }, 1000);
}

watch(isStop, (val) => {
  if (val) {
    clearTimer();
  } else {
    startTimer();
  }
});

// 开始时启动定时器
onMounted(() => {
  startTimer();
});

// 卸载时清理
onUnmounted(() => {
  clearTimer();
});

function toggleStop() {
  isStop.value = !isStop.value;
}

function decrease10() {
  time.value = Math.max(0, time.value - 10);
  // 如果减至 0，清理定时器
  if (time.value === 0) clearTimer();
}

function restart() {
  clearTimer();
  time.value = INITIAL;
  isStop.value = false;
  // 立即启动新定时器
  startTimer();
}

function formatTime(secs) {
  const m = Math.floor(secs / 60)
    .toString()
    .padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
</script>

<style scoped>
button {
  margin-right: 8px;
}
</style>
```

</Collapse>

### 4. 防抖（debounce）

防抖：连续触发则推迟执行，只有触发停止后才执行一次（适合搜索输入、resize 结束后的行为）。

1. 简单版
<Collapse>

```js

function debounce(fn, wait = 300) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

```

</Collapse>

2. 支持取消 cancel() 和立即触发 flush()

<Collapse>

```js
function debounce(fn, wait = 300) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(lastThis, lastArgs);
      lastArgs = lastThis = null;
      timer = null;
    }, wait);
  }

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
    lastArgs = lastThis = null;
  };

  debounced.flush = () => {
    if (timer) {
      clearTimeout(timer);
      fn.apply(lastThis, lastArgs);
      lastArgs = lastThis = null;
      timer = null;
    }
  };

  return debounced;
}

```

</Collapse>

3. 支持 leading（立即触发）和 trailing（默认末尾触发）

<Collapse>

```js

function debounce(fn, wait = 300, options = {}) {
  let timer = null;
  let lastArgs;
  let lastThis;
  let hasLeadingCalled = false;

  const { leading = false, trailing = true } = options;

  function invoke() {
    fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
  }

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;

    if (leading && !hasLeadingCalled) {
      // 立即调用（leading）
      invoke();
      hasLeadingCalled = true;
      // 设置一个 timer to reset leading flag after wait
      timer = setTimeout(() => {
        hasLeadingCalled = false;
        timer = null;
      }, wait);
      return;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (trailing && lastArgs) invoke();
      hasLeadingCalled = false;
      timer = null;
    }, wait);
  }

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
    lastArgs = lastThis = null;
    hasLeadingCalled = false;
  };

  debounced.flush = () => {
    if (timer && lastArgs) {
      clearTimeout(timer);
      invoke();
      hasLeadingCalled = false;
      timer = null;
    }
  };

  return debounced;
}



```

</Collapse>

4. 返回 Promise 的防抖

<Collapse>

```js
function debouncePromise(fn, wait = 300) {
  let timer = null;
  let lastArgs;
  let lastThis;
  let pendingResolvers = [];

  const debounced = function(...args) {
    lastArgs = args;
    lastThis = this;

    clearTimeout(timer);

    return new Promise((resolve, reject) => {
      pendingResolvers.push({ resolve, reject });
      timer = setTimeout(async () => {
        timer = null;
        try {
          const result = await fn.apply(lastThis, lastArgs);
          // resolve all pending promises with the result
          pendingResolvers.forEach(r => r.resolve(result));
        } catch (err) {
          pendingResolvers.forEach(r => r.reject(err));
        } finally {
          pendingResolvers = [];
        }
      }, wait);
    });
  };

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
    pendingResolvers.forEach(r => r.reject(new Error('Cancelled')));
    pendingResolvers = [];
  };

  return debounced;
}

```

</Collapse>

### 5. 节流（throttle）

节流：固定节奏执行，间隔内最多执行一次（适合滚动、拖拽、进度上报）。

1. 简单

<Collapse>

```js

function throttle_timestamp(fn, wait) {
  let last = 0; // 上次执行时间（ms）

  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}


```

</Collapse>

2. 定时器版（支持 trailing，即在窗口结束时执行）

<Collapse>

```js

function throttle_timer(fn, wait) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, wait);
    }
  };
}



```

</Collapse>

3. 进阶

<Collapse>

```js

function throttle(fn, wait, options = {}) {
  let lastExec = 0; // 上次执行时间
  let timer = null; // 挂起的定时器
  let lastArgs = null;
  let lastThis = null;
  const { leading = true, trailing = true } = options;

  const invoke = (time) => {
    lastExec = time;
    fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
  };

  const throttled = function (...args) {
    const now = Date.now();
    if (!lastExec && !leading) {
      // 如果不允许 leading，初始化 lastExec 为当前时间，避免立即触发
      lastExec = now;
    }

    const remaining = wait - (now - lastExec);
    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      // 时间到 — 立即执行
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      invoke(now);
    } else if (!timer && trailing) {
      // 在窗口结束时执行一次
      timer = setTimeout(() => {
        timer = null;
        // 更新执行时间为触发时刻
        invoke(Date.now());
      }, remaining);
    }
  };

  throttled.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    lastExec = 0;
    lastArgs = lastThis = null;
  };

  throttled.flush = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      // 直接立即执行挂起的调用
      invoke(Date.now());
    }
  };

  return throttled;
}


```

</Collapse>

### 5. 手写 Promise

<Collapse>

```js
class MyPromise {
        static PENDING = "pending";
        static RESOLVED = "resolved";
        static REJECTED = "rejected";
        constructor(executor) {
          this.status = MyPromise.PENDING;
          // resolve 的值
          this.value = null;
          // reject 的值
          this.reason = null;
          // then 成功回调
          this.onFulfilledQueues = [];
          // then 失败回调
          this.onRejectedQueues = [];

          // 执行成功回掉
          let resolve = (value) => {
            if (this.status === MyPromise.PENDING) {
              this.status = MyPromise.RESOLVED;
              this.value = value;
              // console.log("this.onFulfilledQueues", this.onFulfilledQueues);
              this.onFulfilledQueues.forEach((item) => {
                try {
                  item(value);
                } catch (err) {
                  reject(err);
                }
              });
            }
          };

          // 执行失败回掉
          let reject = (reason) => {
            if (this.status === MyPromise.PENDING) {
              this.status = MyPromise.REJECTED;
              this.reason = reason;
              this.onRejectedQueues.forEach((item) => {
                try {
                  item(value);
                } catch (err) {
                  reject(err);
                }
              });
            }
          };

          try {
            executor(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }

        then(onFulfilled, onRejected) {
          onFulfilled =
            typeof onFulfilled === "function" ? onFulfilled : (value) => value;
          onRejected =
            typeof onRejected === "function"
              ? onRejected
              : (reason) => {
                  throw reason;
                };

          const promise = new MyPromise((res, rej) => {
            if (this.status === MyPromise.PENDING) {
              this.onFulfilledQueues.push((v) => res(onFulfilled(v)));
              this.onRejectedQueues.push((v) => rej(onRejected(v)));
            }
            // 状态是成功态，直接就调用 onFulfilled 函数
            if (this.status === MyPromise.RESOLVED) {
              res(onFulfilled(this.value));
            }

            // 状态是成功态，直接就调用 onRejected 函数
            if (this.status === MyPromise.REJECTED) {
              rej(onRejected(this.reason));
            }
          });

          return promise;
        }

        // 将多个 Promise 并行等待：所有都成功则返回按原数组顺序的结果数组，
        // 只要有一个失败则立即 reject（行为类似原生 Promise.all）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(valueArray) / reject(firstError)
        static all(arr) {
          return new MyPromise((res, rej) => {
            let result = [];
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
              arr[i].then(
                (d) => {
                  result[i] = d;
                  if (++count === arr.length) {
                    res(result);
                  }
                },
                (err) => {
                  rej(err);
                }
              );
            }
          });
        }
        // 竞速：返回第一个完成（resolve 或 reject）的结果（类似原生 Promise.race）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(firstResolved) 或 reject(firstRejected)
      
        static race(arr) {
          return new MyPromise((res, rej) => {
            for (let i = 0; i < arr.length; i++) {
              arr[i].then(res, rej);
            }
          });
        }
        
        // allSettled：等待所有 Promise 都 settle（不论成功或失败）后返回结果集合
        // 参数：promises - Promise 实例数组
        // 返回：MyPromise，resolve(resultArray)
        // 说明：本实现将每个 Promise 的 finally 视作“完成”的回调点并把返回值放到结果数组，
        //       意味着结果数组项的结构取决于 finally 回调传入的值 —— 与原生 Promise.allSettled 返回
        //       的 {status, value/reason} 结构有所不同。调整以匹配原生行为可在 finally/then 中
        //       分别处理 fulfilled/rejected 情况。

        static allSettled(promises) {
          return new MyPromise((resolve) => {
            let result = [];
            let count = 0;
            for (let i = 0; i < promises.length; i++) {
              promises[i].finally((res) => {
                result[i] = res;
                if (++count == promises.length) {
                  resolve(result);
                }
              });
            }
          });
        }

        // any：只要有一个 Promise 成功就 resolve（值为第一个成功的结果），
        //      若全部失败则 reject，返回所有错误组成的数组（行为类似原生 Promise.any，
        //      但原生 Promise.any 在全部失败时会返回 AggregateError）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(firstSuccess) 或 reject(errorArray)
 
        static any(arr) {
          return new MyPromise((res, rej) => {
            let result = [];
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
              arr[i].then(
                (d) => {
                  res(d);
                },
                (err) => {
                  result[i] = err;
                  if (++count === arr.length) {
                    rej(result);
                  }
                }
              );
            }
          });
        }

        catch(rej) {
          return this.then(null, rej);
        }

        finally(res) {
          return this.then(res, res);
        }

        // map：限制并发数的 Promise 执行器
        // 参数：
        //   promises - Promise 实例数组（或返回 Promise 的函数数组，视使用场景）
        //   concurrency - 最大并发数（同时运行的 Promise 数量上限）
        // 返回：MyPromise，resolve(resultArray) 在所有 Promise 完成后触发
        // 算法要点：
        //  - 使用 nextIndex 指向下一个待启动的 Promise，下发任务时递增 nextIndex
        //  - 初始启动 concurrency 个任务；每当一个任务完成后（finally 回调），
        //    记录结果并启动下一个待办任务，从而始终保持并发数量不超过 concurrency
        //  - 通过 count 统计已完成任务数，全部完成后 resolve 最终结果数组
        // 注意：
        //  - 这里通过 promises[i].finally(...) 作为“完成”判定点，因此无论成功或失败都
        //    会触发后续调度；若需区分成功/失败并保留状态信息，需要在 finally/then 中
        //    对 result 数组项存储更丰富的对象（如 { status, value/reason }）

        static map(promises, concurrency) {
          // 返回一个新的 MyPromise
          return new MyPromise((resolve) => {
            let result = []; // 用于保存每个 Promise 的结果
            let count = 0; // 已完成的 Promise 数量
            let nextIndex = 0; // 下一个要启动的 Promise 下标

            // 并发执行的函数
            function run() {
              // 如果所有 Promise 都已启动，则直接返回
              if (nextIndex >= promises.length) return;
              const current = nextIndex; // 当前要启动的 Promise 下标
              nextIndex++; // 下一个要启动的下标
              // 启动当前 Promise，并在其 finally 后处理结果
              promises[current].finally((res) => {
                result[current] = res; // 保存结果到对应位置
                count++; // 完成数量加一
                if (count === promises.length) {
                  // 所有 Promise 都完成后，resolve 最终结果
                  resolve(result);
                } else {
                  // 启动下一个 Promise
                  run();
                }
              });
            }

            // 一开始并发启动 concurrency 个 Promise
            for (let i = 0; i < concurrency && i < promises.length; i++) {
              run();
            }
          });
        }
      }

      let p1 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          console.log("ok");
          resolve("成功了");
        }, 1000);
      });

      p1.then(
        (data) => {
          console.log("then1 resolve", data);
          return 111;
        },
        (err) => {
          console.log("then1 reject", err);
        }
      )
        .then(
          (data) => {
            console.log("then2 resolve", data);
          },
          (err) => {
            console.log("then2 reject", err);
          }
        )
        .then(
          (data) => {
            console.log("then3 resolve", data);
          },
          (err) => {
            console.log("then3 reject", err);
          }
        );

      let Promise1 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise1");
        }, 5000);
        resolve("Promise2");
      });

      let Promise2 = new MyPromise((resolve, reject) => {
        resolve("Promise2");
      });

      let Promise3 = new MyPromise((resolve, reject) => {
        resolve("Promise3");
      });

      let Promise4 = new MyPromise((resolve, reject) => {
        resolve("Promise4");
      });
      let Promise5 = new MyPromise((resolve, reject) => {
        reject("Promise5");
      });
      let Promise6 = new MyPromise((resolve, reject) => {
        reject("Promise6");
      });

      let p = MyPromise.all([Promise1, Promise2, Promise3, Promise4]);

      p.then(
        (res) => {
          // 三个都成功则成功
          console.log("all ---成功了", res);
        },
        (err) => {
          console.log("all ---失败了", err);
        }
      ).catch((error) => {
        // 只要有失败，则失败
        console.log("all ---失败了", err);
      });

      MyPromise.any([Promise4, Promise5, Promise6])
        .then(
          (res) => {
            // 三个都成功则成功
            console.log("any 成功了", res);
          },
          (err) => {
            console.log("any 失败了", err);
          }
        )
        .catch((error) => {
          // 只要有失败，则失败
          console.log("any 失败了", err);
        });

      Promise.race([Promise1, Promise2, Promise3]).then(
        (res) => {
          console.log("race resolve", res);
        },
        (rej) => {
          console.log("race reject", rej);
        }
      );

      let pAll = MyPromise.allSettled([Promise1, Promise2, Promise3, Promise4]);

      pAll.then(
        (res) => {
          // 三个都成功则成功
          console.log("---成功了 allSettled", res);
        },
        (err) => {
          // 只要有失败，则失败
          console.log("---失败了 allSettled", err);
        }
      );

      // 2s 后输出：---成功了 (4) ["Promise1", "Promise2", "Promise3", "Promise4"]

      // 直接输出：---失败了 Promise4


```

</Collapse>



### 6. js bind 实现机制？手写一个 bind 方法？

<Collapse>


bind的 作用: **返回一个新的函数，这个新函数在被调用时，其内部的 this 会永久绑定为你指定的对象。**


bind 做了三件事：

- 绑定 this：返回一个新的函数，内部的 this 固定为传入的对象；
- 支持参数预置：可以提前绑定部分参数；
- 兼容 new 调用：如果用 new 调用 bind 生成的函数，this 绑定失效，应该指向新实例。


```js
// 简单版
Function.prototype.myBind = function (context) {
  const fn = this; // 保存原函数
  return function () {
    return fn.apply(context);
  };
};

// 支持参数传递（柯里化）
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};


// 考虑 new 构造调用
Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  function boundFn(...innerArgs) {
    // 如果作为构造函数被调用
    const isNew = this instanceof boundFn;
    return fn.apply(isNew ? this : context, [...args, ...innerArgs]);
  }

  // 继承原函数原型
  boundFn.prototype = Object.create(fn.prototype);

  return boundFn;
};

```

bind、call、apply: 
| 特点    | 描述                  |
| ----- | ------------------- |
| 功能目标  | 改变函数执行时的 `this` 指向  |
| 调用对象  | 必须是函数（Function 的实例） |
| 第一个参数 | 都是要绑定的 `this` 对象    |
| 后续参数  | 都是函数的参数（但传法不同）      |


| 方法                                | 是否立即执行  | 参数传递方式  | 返回值             |
| --------------------------------- | ------- | ------- | --------------- |
| **`call(thisArg, ...args)`**      | ✅ 立即执行  | 按参数依次传入 | 函数执行结果          |
| **`apply(thisArg, [argsArray])`** | ✅ 立即执行  | 数组形式传参  | 函数执行结果          |
| **`bind(thisArg, ...args)`**      | ❌ 不立即执行 | 按参数依次传入 | **返回新函数**（延迟执行） |

```js
function greet(g1, g2) {
  console.log(this.name, g1, g2);
}

const obj = { name: "Alice" };

greet.call(obj, "Hello", "World");   // Alice Hello World
greet.apply(obj, ["Hi", "JS"]);      // Alice Hi JS
const bound = greet.bind(obj, "Hey");
bound("React");                      // Alice Hey React

```

| 特性        | `call` | `apply` | `bind`      |
| --------- | ------ | ------- | ----------- |
| 是否立即执行    | ✅ 是    | ✅ 是     | ❌ 否         |
| 参数形式      | 单个、多个  | 数组      | 单个、多个       |
| 返回值       | 执行结果   | 执行结果    | 新函数         |
| 是否可用作构造函数 | ❌ 否    | ❌ 否     | ✅ 可（支持 new） |
| 是否能预置参数   | ❌ 否    | ❌ 否     | ✅ 可         |
| 是否影响原函数   | ❌ 否    | ❌ 否     | ❌ 否         |

应用场景: 
| 场景           | 使用方法                                             |
| ------------ | ------------------------------------------------ |
| 借用其他对象方法     | `Array.prototype.slice.call(arguments)`          |
| 动态传参         | `fn.apply(obj, [1, 2, 3])`                       |
| 函数柯里化 / 预置参数 | `fn.bind(obj, 1, 2)`                             |
| 定时器中固定 this  | `setTimeout(fn.bind(this), 1000)`                |
| React 组件事件绑定 | `this.handleClick = this.handleClick.bind(this)` |


- **call：立刻执行，参数依次传。**

- **apply：立刻执行，参数打包传。**

- **bind：返回函数，稍后执行。**

</Collapse>


### 7. 图片查看器

加载、显示、缩放、平移、旋转; 缩略图 / 小地图 / 缩放滑块;


<Collapse>


| 层级     | 功能模块                      | 描述          |
| ------ | ------------------------- | ----------- |
| 🧱 基础层 | **加载、显示、缩放、平移、旋转**        | 图片展示的最小功能集合 |
| 🧭 导航层 | **缩略图 / 小地图 / 缩放滑块**      | 帮助用户快速定位和缩放 |
| 🧰 工具层 | **标注、测量、取色、截图、对比**        | 用户交互功能      |
| 💾 数据层 | **多图层、多通道、切片加载、缓存**       | 支撑大图和多维数据展示 |
| 🧠 智能层 | **懒加载、GPU 渲染、离屏渲染、预加载预测** | 性能优化和体验提升   |
| 🧩 扩展层 | **插件体系 / 事件系统 / 定制UI**    | 框架化、工程化能力   |


</Collapse>


### 8.手写 instanceof 方法

<Collapse>

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

实现步骤：
- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null

```js
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
      prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
```

</Collapse>


### 9. 手写 new 操作符

<Collapse>


在调用 new 的过程中会发生以上四件事情：

（1）首先创建了一个新的空对象

（2）设置原型，将对象的原型设置为函数的 prototype 对象。

（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```js

function myNew(constructor, ...args) {
  if (typeof constructor !== "function") return
  let obj = {}
  obj.prototype = Object.create(constructor.prototype)
  const res = constructor.apply(obj, args)
  if (res && (typeof res !== "object" || typeof res === "function")) return res
  return obj
}
function Fn(obj) {
  this.obj =obj
}
let obj =myNew(Fn,'222')
console.log(obj);

```

</Collapse>


### 10.函数柯里化

<Collapse>

柯里化（Currying） 是把一个接受多个参数的函数，转换成一系列每次只接收一个参数的函数。

类比: “一次性买 3 个苹果”，变成 “一次买 1 个，买 3 次，最后结算”。

```
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3)  →  curry(add)(1)(2)(3)

curry(add)(1)  // 返回一个函数，等待第二个参数


```

好处:
- ✅ 参数复用（延迟调用）

- ✅ 提高函数复用性、组合性

- ✅ 实现函数“预设参数”（偏函数）

- ✅ 提升代码可读性和函数式风格


```js

function curry(fn) {
  const curried = (...args) => {
    // 如果参数足够就执行，否则返回新函数继续收集
    return args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
  };
  return curried;
}

```

</Collapse>

