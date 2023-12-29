// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.ja.md

interface Todo1 {
  title: string;
  description: string;
}

// 自分の回答
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

const readonly: MyReadonly<Todo1> = {
  title: "Hey",
  description: "foobar",
};

// readonly.title = "Hello"; Error: cannot reassign a readonly property
// readonly.description = "barFoo"; Error: cannot reassign a readonly property
