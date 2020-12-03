class Party {
  _name: string;

  constructor(name) {
    this._name = name;
  }
}

class Employee extends Party {
  _id: number;
  _monthlyCost: number;

  constructor(name, id, monthlyCost) {
    super(name);

    this._id = id;
    this._monthlyCost = monthlyCost;
  }

  // 생략
}

class Department extends Party {
  _staff: string;

  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }

  // 생략
}