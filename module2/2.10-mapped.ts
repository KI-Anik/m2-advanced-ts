{
  // mapped types

  const arrOfNumber: number[] = [1, 3, 5, 6];

  const arrOfString: string[] = arrOfNumber.map((num) => num.toString());
//   console.log(arrOfString);

//   ------------------------------------

type AreaNumber = {
    height: number,
    width: number
}

type Height =  AreaNumber['height'] // look up type


type AreaString <T> ={
    [key in keyof T] : T[key]
}

const area1 : AreaString <{ height: string, width: number}> = {
    height: '100',
    width: 100
}

















  //
}
