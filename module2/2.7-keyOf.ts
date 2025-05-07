{
    // 
type Vehicle ={
    car: string,
    ship: string,
    bike: string
}

type Owner = 'car' | "ship" | "bike"; //manually
type Owner1 = keyof Vehicle

// const person : Owner = "bike"
// const person1 : Owner1 = "bike";

// --------------------

const getPropertyValue = <X , Y extends keyof X> (obj : X, key: Y ) => {
    return obj[key]
}

const user = {
    id: 12,
    name: "anik",
    age: 21,
    address: 'faridpur'
}

// user.['age']

const res1 =  getPropertyValue(user, 'address')

const car = {
    model: 'yt100',
    year: 2016
}

const res2 = getPropertyValue(car, 'model')














    // 
}