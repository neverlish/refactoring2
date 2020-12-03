class Party { }

class Employee extends Party {
  _id: number;
  _name: string;
  _monthlyCost: number;

  constructor(name, id, monthlyCost) {
    super();
    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }

  // 생략
}

class Department extends Party {
  _name: string;
  _staff: string;

  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }

  // 생략
}