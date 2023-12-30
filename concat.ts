// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

// 回答
// 分からなかった

// 参考になった回答
type Tuple = readonly unknown[];

type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];

type ConcatResult = Concat<[1], [2]>; // expected to be [1, 2]
type ConcatResult2 = Concat<[1, 2], [2, 3]>; // expected to be [1, 2, 2, 3]
type ConcatResult3 = Concat<readonly [], [1]>; // expected to be [1]

// Array型には「...」で要素の型を展開できる。
type Sample = string[];
type Sample2 = [...Sample];
