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