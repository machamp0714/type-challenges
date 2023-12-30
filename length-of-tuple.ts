// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

type tesla = readonly ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];
type e = [];

// 回答
// type Length<T extends readonly unknown[]> = T["length"];

// 参考になった回答
type Length<T extends { length: number }> = T["length"];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
type empty = Length<e>; // expected 0

type obj = {
  length: 10;
};

type ObjLength = Length<obj>;
