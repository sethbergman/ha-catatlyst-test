# ha-catatlyst-test
https://new-hhxlayaoxr.now.sh

### Example 1

```
var begin = Date.now(x);
Math.sqrt(2);
var stopWatch = Date.now(y) - begin;
```

### Example 2
```
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

### Example 3
[from my blog - async / await](https://blog.sethbergman.com/level-up-using-async-await-with-the-mean-stack/)
