'use strict';

const tap = require('tap');
const sinon = require('sinon');
const clockit = require('..');

var sandbox = sinon.sandbox.create();

tap.tearDown(() => {
  sandbox.restore();
})

sandbox.stub(process, 'hrtime');
process.hrtime.returns([1, 2]);

var timer = clockit.start();

tap.equal(timer.ms, 1000.000002);
tap.equal(timer.us, 1000000.002);
tap.equal(timer.ns, 1000000002);
