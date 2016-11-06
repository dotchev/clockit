# clockit
Simple high resolution timer for node

Wraps [process.hrtime()](https://nodejs.org/api/process.html#process_process_hrtime_time) 
in a simple to use interface.
No need to multiply and divide to get desired measurement units.

Timer precision is a nanosecond.

***Note:** requires Node.js 4 or later.

## Install

```sh
npm install -S clockit
```

## Usage

```js
const clockit = require('clockit');

var timer = clockit.start();
// ...
var ms = timer.time_ms(); // time passed in milliseconds
var us = timer.time_us(); // time passed in microseconds
var ns = timer.time_ns(); // time passed in nanoseconds
```

Since time is measured in nanoseconds, `time_ns` returns an integer while
`time_us` and `time_ms` return floating point numbers without rounding.

All `time_*` functions return the elapsed time since the `start()` call.
This means that two consecuritve invocations of `time_ns()` for example will
return different values taking into account the time between the two calls.

For example on my machine this code
```js
var clockit = require('./');

var timer = clockit.start();
var t =[
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns(),
  timer.time_ns()
];
console.log(t[0]);
for (var i = 1; i < t.length; ++i) {
  console.log('+' + (t[i] - t[i-1]));
}
```
Produces this result
```
133938
+21757
+11768
+5456
+61002
+12349
+4356
+7805
+525
+481
+414
+420
```
