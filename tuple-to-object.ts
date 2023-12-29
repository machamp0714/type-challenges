// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ja.md

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// 回答
type TupleToObject<T extends ReadonlyArray<string | number | symbol>> = {
  [K in T[number]]: K;
};

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X',

// 参考
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// インデックス付きアクセス型を使って、別の型の特定のプロパティを調べることが出来る。
