// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

// 回答
// type First<T extends any[]> = T[0];

// 参考になった回答
// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // never

//
// T['length'] は配列の要素数の型を返す
// T extends [] はTが空の配列であることを意味する
// inferについて
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
