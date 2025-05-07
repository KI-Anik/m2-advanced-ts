{
  //constraints

  {
    const addCourseToStudent = <
      T extends { id: number; name: string; email: string }
    >(
      student: T
    ) => {
      const course = "Next Level";
      return {
        ...student,
        course,
      };
    };

    const student1 = addCourseToStudent({
      id: 1,
      name: "akash",
      email: "akash@gmail.com",
      address: "dhaka",
    });
    const student2 = addCourseToStudent({
      id: 21,
      name: "akasha",
      email: "akasha21@gmail.com",
    });
    //   console.log( typeof res5)

    //
  }

  //
}
