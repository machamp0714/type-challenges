// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md

import type { Equal, Expect } from "./utils";

type Unshift<T extends unknown[], Value> = [Value, ...T];

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>
];
