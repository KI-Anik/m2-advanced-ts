{
  // generic with function
  const createArr = (params: string): string[] => {
    return [params];
  };

  const res1 = createArr("bangladesh");

  const createArrWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  const res2 = createArrWithGeneric("12");

  type User = {
    id: number;
    name: string;
  };
  const res3 = createArrWithGeneric<User>({
    id: 12,
    name: "anik",
  });

  //   ------------------------------

  const createArrWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const res12 = createArrWithTuple<string, number>("12", 123);

  type User1 = {
    id: number;
    name: string;
  };
  const res13 = createArrWithTuple<User, string>(
    {
      id: 12,
      name: "anik",
    },
    "bangladesh"
  );

  //   ------------------------------------------

  const addCourseToStudent = <T> (student: T) => {
    const course = "Next Level";
    return {
      ...student,
      course
    };
  };

  const student1 = addCourseToStudent({id: 1, name: 'akash', email: 'akash@gmail.com' })
  const student2 = addCourseToStudent({id: 21, name: 'akasha', email: 'akasha21@gmail.com'})
//   console.log( typeof res5)

  //
}
