"use strict";

const test = require("ava");

const views = require("../../src/constants/views");

test("is an object", (t) => {
  t.is(typeof views, "object");
});
