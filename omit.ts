// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

import type { Equal, Expect } from "./utils";

// 回答
// type MyOmit<T, K extends keyof T> = {
//   [key in Exclude<keyof T, K>]: T[key];
// };

// 参考になった回答
type MyOmit<T, K> = { [key in keyof T as key extends K ? never : key]: T[key] };

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// メモ
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
