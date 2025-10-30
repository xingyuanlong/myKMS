### 现场手写代码

### 1. 数组转树

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

```

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

```
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

```

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

```
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

```

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

```

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

```

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