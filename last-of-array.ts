// https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md

import type { Equal, Expect } from "./utils";

// 回答
type Last<T extends any[]> = T extends readonly [...infer _, infer Last]
  ? Last
  : never;

// 参考になった回答
// type Last<T extends any[]> = [any, ...T][T["length"]];

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
