// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md

import type { Equal, Expect } from "./utils";

// 回答
type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends Function
    ? T[key]
    : T[key] extends { [key: string]: any }
    ? DeepReadonly<T[key]>
    : T[key];
};

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>
];

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
  1: {
    hoge: "hoge";
  };
};

type X2 = { a: string } | { b: number };

type Expected1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
  readonly 1: {
    readonly hoge: "hoge";
  };
};

type Expected2 = { readonly a: string } | { readonly b: number };

// Javascriptにおけるobjectとは
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures#Data_types
//
// オブジェクトを除く全ての値はプリミティブ値と呼ばれ、nullを除いて全てtypeof演算子で確認することが出来る。
// 「typeof null」はobjectになる。
// 「null」と「undefined」を除くプリミティブ値には対応するオブジェクトラッパーがあり、それらがメソッドを提供している。

type Test<T> = T extends { [key: string]: any } ? true : false;

type C = Test<{ 1: string }>;
