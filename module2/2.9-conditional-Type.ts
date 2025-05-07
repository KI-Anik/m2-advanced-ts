{
  // conditional Type
  type A = null;
  type B = undefined;

  type X = A extends null ? true : false;
  type Y = A extends null ? true : B extends undefined ? undefined : any;

  type User = {
    name : string
    bike: boolean
    mobile: number
  }

  type CheckUser <T> = T extends keyof User ? true : false 

  type HasName = CheckUser<'name'> // true
  type HasBike = CheckUser<'bike'> // true
  type HasPlane = CheckUser<'plane'> // false
  type HasMobile = CheckUser<'mobile'> // true

  //
}
