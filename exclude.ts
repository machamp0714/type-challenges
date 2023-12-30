// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

// 回答
// 分からなかった。

// 参考になった回答
type MyExclude<U, K> = U extends K ? never : U;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
//
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;

// 和集合が与えられると通常、分配型になる
// Union型を `ToArray` に適用すると、そのユニオンの各メンバーに `ToArray` が適用される。
// つまり
// ToArray<string> | ToArray<number>
// という挙動になる。
// 分散性を期待するならば、extendsの各辺を[]で囲む
type ToArray2<Type> = [Type] extends [any] ? Type[] : never;
type StrArrOrNumArr2 = ToArray2<string | number>; // (string | number)[]
