'use strict';

const tap = require('tap');
const clockit = require('..');

var timer = clockit.start();
var t =[
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns,
  timer.ns
];
var td = t.map((v, i) => i === 0 ? t[i] : t[i] - t[i - 1]);
console.log(td);

td.forEach((d) => tap.ok(d > 0));
