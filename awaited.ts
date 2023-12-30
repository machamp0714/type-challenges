// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

type ExampleType = Promise<string>;
type ExampleTypePromise = Promise<Promise<string>>;

// 回答
// type MyAwaited<T> = T extends Promise<infer U> ? U : never;

// 参考になった回答
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

type AwaitedResult = MyAwaited<ExampleType>; // string
type AwaitedResult2 = MyAwaited<ExampleTypePromise>;

// Promise風に振る舞う
// https://qiita.com/suin/items/b9d00dff380486338ecd
// Javascriptでは `then` メソッドを持っているオブジェクトは `Promise` と判断される。
class HelloWorldPromise implements PromiseLike<string> {
  readonly #promise: Promise<string>;

  constructor() {
    this.#promise = Promise.resolve("Hello World");
  }

  then<Result1 = string, Result2 = never>(
    onFulfilled?:
      | ((value: string) => Result1 | PromiseLike<Result1>)
      | undefined
      | null,
    onRejected?:
      | ((reason: unknown) => Result2 | PromiseLike<Result2>)
      | undefined
      | null
  ): Promise<Result1 | Result2> {
    return this.#promise.then(onFulfilled, onRejected);
  }
}
