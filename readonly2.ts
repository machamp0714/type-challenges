// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md

import type { Alike, Expect } from "./utils";

// type MyReadonly2<T, K extends keyof T = keyof T> = K extends keyof T
//   ? { readonly [key in K]: T[key] } & { [key in Exclude<keyof T, K>] }
//   : { readonly [key in keyof T]: T[key] };

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [k in K]: T[k];
} & {
  [k in keyof T as k extends K ? never : k]: T[k];
};

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

type A = { readonly title: string } & { [title in never]: string };
type B = MyReadonly2<Todo2, "description">;
