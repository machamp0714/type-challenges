// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md

import type { Equal, Expect } from "./utils";

// 回答
type TupleToUnion<T> = T extends (infer U)[] ? U : never;

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

// タプルは配列のサブタイプで、固定長の配列を型付けするための型である。
// 他の多くの型とは異なりタプルは明示的に型付けする必要がある。
