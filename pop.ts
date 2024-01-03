// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md

import type { Equal, Expect } from "./utils";

// 回答
type Pop<T extends any[]> = T extends [...infer Start, infer _] ? Start : T;

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>
];
