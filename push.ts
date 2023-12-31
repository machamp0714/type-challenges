// https://github.com/type-challenges/type-challenges/tree/main/questions/03057-easy-push

import { Expect, Equal } from "./utils";

type Push<T extends unknown[], Value> = [...T, Value];

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];
