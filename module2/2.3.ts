{
  //  generics type

  type GenericArr<T> = Array<T>; //dynamic and reusable type = generic

  // const rollNm : number[]= [1,2,13]
  // const rollNm : Array<number>= [1,2,13] // generise array

  const rollNm: GenericArr<number> = [1, 2, 13]; // generic

  // const mentor: string[]= ['mr x', 'mr y']
  //   const mentor: Array<string> = ["mr x", "mr y"];

  const mentor: GenericArr<string> = ["mr x", "mr y"];

  // const booleanArr : boolean[] = [true, false, true]
  //   const booleanArr: Array<boolean> = [true, false, true];

  const booleanArr: GenericArr<boolean> = [true, false, true];

  // object
  const user: GenericArr<{ name: string; age: number }> = [
    {
      name: "anik",
      age: 12,
    },
    {
      name: "anik",
      age: 12,
    },
  ];

  // generic tuple

  type GenericTuple<x, y> = [x, y];

  const human: GenericTuple<string, string> = ["anik", "banik"];

  type User ={ name: string; age: number }

  const tuple: GenericTuple<number, User > = [
    111,
    {
      name: "kala",
      age: 12,
    },
  ];

  //
}
