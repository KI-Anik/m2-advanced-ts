{
  // type alias
  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "anik",
    age: 15,
  };

  //  alternative --> interface
  interface User2 {
    name: string;
    age: number;
  }

  const user2: User2 = {
    name: "anik",
    age: 15,
  };


  // extends
  type UserWithRole = User1 & { role: string };

  const user3: UserWithRole = {
    name: "anik",
    age: 15,
    role: "manager",
  };


  interface UserWithRole2 extends User2 {
    address: string;
  }

  const user4: UserWithRole2 = {
    name: "anik",
    age: 15,
    address: "shal",
  };



//  in js: all object, array, function are object

type Roll1 = number[]
const rollNum1 : Roll1 = [1, 2 , 3]


interface Roll2 {
    [index : number] : number
}

const rollNum2 : Roll2 = [4, 5, 6]



// function

type Add1 = (num1: number, num2: number)=> number

interface Add2 {
    (num1: number, num2: number) : number
}












  //
}
