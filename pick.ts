// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ja.md

// 解答
// type MyPick<T, K extends keyof T> = Omit<T, Exclude<keyof T, K>>;

// 参考になった解答
type MyPick<T, K extends keyof T> = {
  [k in K]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;
//
// type TodoPreview2 = MyPick<Todo, "title" | "completed" | "hoge">;
// Type '"title" | "completed" | "hoge"' does not satisfy the constraint 'keyof Todo'.
//

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// ----------------------------------------------
// never型について
// 戻ることがない関数の型。例外をスローする関数や、永久に実行される関数など。

// インデックスシグネチャについて
// [key: T]: Uという構文は遺ンデックスシグネチャと呼ばれる。
// これはオブジェクトがより多くのkeyを持つ可能性があることをTypeScriptに伝える。
// keyの型Tはstring, number, symbolのいずれかでなければならない。
// https://typescript-jp.gitbook.io/deep-dive/type-system/index-signatures
// ----------------------------------------------
