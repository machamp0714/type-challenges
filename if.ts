// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

// 回答
type If<C extends boolean, T, U> = C extends true ? T : U;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
type C = If<never, "a", "b">; // neverになった
