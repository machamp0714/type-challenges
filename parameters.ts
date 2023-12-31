// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md

import type { Equal, Expect } from "./utils";

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: "A" }): void {}
function baz(): void {}

type MyParameters<F> = F extends (...args: infer U) => void ? U : never;

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
