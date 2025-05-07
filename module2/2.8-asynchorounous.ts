{

  // promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to get data");
      }
    });
  };

  // calling createPromise function
  const showAll = async (): Promise<string> => {
    const result : string = await createPromise();
    // console.log(result);
    return result
  };

//   showAll();

// ---------------------------------------------- object type 

    type SomeObj ={name : string}

  // promise
  const createPromiseObj = (): Promise<SomeObj> => {
    return new Promise<SomeObj>((resolve, reject) => {
      const data: SomeObj = {name: 'someobj'};
      if (data) {
        resolve(data);
      } else {
        reject("failed to get data");
      }
    });
  };

  // calling createPromise function
  const showAllObj = async (): Promise<SomeObj> => {
    const result1 : SomeObj = await createPromiseObj();
    // console.log(result);
    return result1
  };

  showAllObj();

// ---------------------------------------------- fetch data

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodo = async () : Promise<Todo> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    // console.log(data)
    return data
}

getTodo()




  //
}
