{
    // utility types --> 1. pick

    type Person = {
        name: string,
        age: number,
        email ?: string,
        contactNo: number
    }

    type NameAge = Pick<Person, 'email'| 'age'>

    // 2.omit 
    type ContanctInfo = Omit<Person, 'name' | 'email' >

    // 3.required
    type PersonRequired = Required<Person>

    // 4.partial
    type PersonPartial = Partial<Person> // make all property assignning status optional

    // 5.readOnly
    type PersonReadonly = Readonly<Person>

    const person1 : PersonReadonly ={
        name: 'mr.uy',
        age: 12,
        contactNo:22
    }

    person1.age = 123 //Cannot assign to 'age' because it is a read-only property

    // 6.record
    type Myobj = Record<string,unknown>

    const res : Myobj ={
        name: 'anik',
        age: 25
    }

    const emtyObj : Record<string,unknown> = {}

























    // 
}