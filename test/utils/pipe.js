"use strict";

const test = require("ava");
const uuid = require("uuid").v4;

const pipe = require("../../src/utils/pipe");

test("return response of first function with a return value", async (t) => {
  const _b = uuid();
  const _c = uuid();

  const a = () => null;
  const b = () => _b;
  const c = () => _c;

  const result = await pipe(a, b, c)();

  t.is(result, _b);
});

test("pass parameter to functions in pipe", async (t) => {
  const _a = uuid();

  const a = (param) => param;

  const result = await pipe(a)(_a);

  t.is(result, _a);
});
