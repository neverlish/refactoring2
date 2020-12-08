class Employee {
  _name: string;
  _type: string;

  constructor(name, type) {
    this._name = name;
  }

  toString() { return `${this._type} ${this.type}`; }
}

class Engineer extends Employee {
  get type() { return 'engineer'; }
}

class Salesperson extends Employee {
  get type() { return 'salesperson'; }
}

class Manager extends Employee {
  get type() { return 'manager'; }
}

function createEmployee(name, type) {
  switch (type) {
    case 'engineer': return new Engineer(name, type);
    case 'salesperson': return new Salesperson(name, type);
    case 'manager': return new Manager(name, type);
    default: throw new Error(`${type} 라는 직원 유형은 없습니다.`);
  }
  return new Employee(name, type);
}